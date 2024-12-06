using System;
using System.Linq;
using Xunit;
using Server.Database;
using Server.Database.Models;
using Xunit.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Server.Test.Database.Test
{
    public class DatabaseTests : IDisposable
    {
        private readonly TucShopContext _context;
        private readonly ITestOutputHelper _output;

        public DatabaseTests(ITestOutputHelper output)
        {
            _context = TestContextFactory.Create();
            _output = output;
        }

        public void Dispose()
        {
            TestContextFactory.Destroy(_context);
        }

        [Fact]
        public void CanAddCustomer()
        {
            var customer = CreateTestCustomer();

            AddAndSaveEntity(customer);

            var savedCustomer = _context.Customers.FirstOrDefault(c => c.CustomerId == customer.CustomerId);
            Assert.NotNull(savedCustomer);
            VerifyCustomerData(customer, savedCustomer);

            _output.WriteLine($"Customer added: {savedCustomer.CustomerFirstName}, {savedCustomer.CustomerId}");
        }

        [Fact]
        public void CanRetrieveCustomer()
        {
            var customer = CreateTestCustomer();
            AddAndSaveEntity(customer);

            var savedCustomer = _context.Customers.FirstOrDefault(c => c.CustomerId == customer.CustomerId);
            Assert.NotNull(savedCustomer);
            VerifyCustomerData(customer, savedCustomer);

            _output.WriteLine($"Customer retrieved: {savedCustomer.CustomerFirstName}, {savedCustomer.CustomerId}");
        }

        [Fact]
        public void CanAddProduct()
        {
            var product = CreateTestProduct();

            AddAndSaveEntity(product);

            var savedProduct = _context.Products.FirstOrDefault(p => p.ProductName == product.ProductName);
            Assert.NotNull(savedProduct);
            VerifyProductData(product, savedProduct);

            _output.WriteLine($"Product added: {savedProduct.ProductName}, {savedProduct.ProductDescription}");
        }

        [Fact]
        public void CanAddOrderHistory()
        {
            var customer = CreateTestCustomer();
            var product = CreateTestProduct();
            AddAndSaveEntity(customer);
            AddAndSaveEntity(product);

            var orderHistory = CreateTestOrderHistory(customer.CustomerId);
            AddAndSaveEntity(orderHistory);

            var orderDetail = CreateTestOrderDetail(orderHistory.OrderId, product.ProductId);
            AddAndSaveEntity(orderDetail);

            var savedOrderHistory = _context.OrderHistories
                .Include(o => o.OrderDetails)
                .FirstOrDefault(o => o.OrderId == orderHistory.OrderId);
            Assert.NotNull(savedOrderHistory);
            VerifyOrderHistoryData(orderHistory, savedOrderHistory);

            var savedOrderDetail = savedOrderHistory.OrderDetails.FirstOrDefault();
            Assert.NotNull(savedOrderDetail);
            VerifyOrderDetailData(orderDetail, savedOrderDetail);

            _output.WriteLine($"OrderHistory added: OrderId={savedOrderHistory.OrderId}, CustomerId={savedOrderHistory.CustomerId}");
        }

        [Fact]
        public void CanRetrieveOrderHistoryWithCustomer()
        {
            var customer = CreateTestCustomer();
            var product = CreateTestProduct();
            AddAndSaveEntity(customer);
            AddAndSaveEntity(product);

            var orderHistory = CreateTestOrderHistory(customer.CustomerId);
            AddAndSaveEntity(orderHistory);

            var savedOrderHistory = _context.OrderHistories
                .Where(o => o.OrderId == orderHistory.OrderId)
                .Include(o => o.Customer)
                .FirstOrDefault();
            Assert.NotNull(savedOrderHistory);
            Assert.NotNull(savedOrderHistory.Customer);
            VerifyOrderHistoryData(orderHistory, savedOrderHistory);
            VerifyCustomerData(customer, savedOrderHistory.Customer);

            _output.WriteLine($"OrderHistory retrieved with Customer: OrderId={savedOrderHistory.OrderId}, CustomerName={savedOrderHistory.Customer.CustomerFirstName}");
        }

        private void AddAndSaveEntity<T>(T entity) where T : class
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        private Customer CreateTestCustomer()
        {
            return new Customer
            {
                CustomerFirstName = "Test",
                CustomerLastName = "User",
                CustomerPassword = "testpassword",
                Phone = "1234567890",
                Address = "789 Test St",
                CreatedAt = new DateOnly(2021, 5, 1),
                UpdatedAt = new DateOnly(2021, 5, 1)
            };
        }

        private Product CreateTestProduct()
        {
            return new Product
            {
                ProductName = "Test Product",
                ProductDescription = "Test Description",
                Price = 100,
                Stock = 30,
                Location = "Test Location",
                CreatedAt = new DateOnly(2021, 5, 1),
                UpdatedAt = new DateOnly(2021, 5, 1)
            };
        }

        private OrderHistory CreateTestOrderHistory(int customerId)
        {
            return new OrderHistory
            {
                CustomerId = customerId,
                CreatedAt = new DateOnly(2023, 6, 1),
                UpdatedAt = new DateOnly(2023, 6, 1)
            };
        }

        private OrderDetail CreateTestOrderDetail(int orderId, int productId)
        {
            return new OrderDetail
            {
                OrderId = orderId,
                ProductId = productId,
                Quantity = 1,
            };
        }

        private void VerifyCustomerData(Customer expected, Customer actual)
        {
            Assert.Equal(expected.CustomerFirstName, actual.CustomerFirstName);
            Assert.Equal(expected.CustomerLastName, actual.CustomerLastName);
            Assert.Equal(expected.CustomerEmail, actual.CustomerEmail);
            Assert.Equal(expected.CustomerPassword, actual.CustomerPassword);
            Assert.Equal(expected.Phone, actual.Phone);
            Assert.Equal(expected.Address, actual.Address);
            Assert.Equal(expected.CreatedAt, actual.CreatedAt);
            Assert.Equal(expected.UpdatedAt, actual.UpdatedAt);
        }

        private void VerifyProductData(Product expected, Product actual)
        {
            Assert.Equal(expected.ProductName, actual.ProductName);
            Assert.Equal(expected.ProductDescription, actual.ProductDescription);
            Assert.Equal(expected.Price, actual.Price);
            Assert.Equal(expected.Stock, actual.Stock);
            Assert.Equal(expected.Location, actual.Location);
            Assert.Equal(expected.CreatedAt, actual.CreatedAt);
            Assert.Equal(expected.UpdatedAt, actual.UpdatedAt);
        }

        private void VerifyOrderHistoryData(OrderHistory expected, OrderHistory actual)
        {
            Assert.Equal(expected.OrderId, actual.OrderId);
            Assert.Equal(expected.CustomerId, actual.CustomerId);
            Assert.Equal(expected.CreatedAt, actual.CreatedAt);
            Assert.Equal(expected.UpdatedAt, actual.UpdatedAt);
        }

        private void VerifyOrderDetailData(OrderDetail expected, OrderDetail actual)
        {
            Assert.Equal(expected.OrderDetailId, actual.OrderDetailId);
            Assert.Equal(expected.OrderId, actual.OrderId);
            Assert.Equal(expected.ProductId, actual.ProductId);
            Assert.Equal(expected.Quantity, actual.Quantity);
            Assert.Equal(expected.TotalPrice, actual.TotalPrice);
        }
    }
}