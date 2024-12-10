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
            var customer = TestHelper.CreateTestCustomer();
            _context.Customers.Add(customer);
            _context.SaveChanges();

            var savedCustomer = _context.Customers.FirstOrDefault(c => c.CustomerId == customer.CustomerId);
            TestHelper.AssertCustomerProperties(customer, savedCustomer);

            _output.WriteLine($"Customer added: {savedCustomer.CustomerFirstName}, {savedCustomer.CustomerId}");
        }

        [Fact]
        public void CanAddProduct()
        {
            var product = TestHelper.CreateTestProduct();
            _context.Products.Add(product);
            _context.SaveChanges();

            var savedProduct = _context.Products.FirstOrDefault(p => p.ProductId == product.ProductId);
            TestHelper.AssertProductProperties(product, savedProduct);

            _output.WriteLine($"Product added: {savedProduct.ProductName}, {savedProduct.ProductId}");
        }

        [Fact]
        public void UpdateProduct()
        {
            var product = new Product
            {
                ProductName = "HTML",
                ProductDescription = "Lär dig mer om HTML.",
                Price = 1000,
                Stock = 30,
                Location = "Distans",
                CreatedAt = new DateOnly(2022, 10, 10),
                UpdatedAt = new DateOnly(2022, 10, 10)
            };
            _context.Products.Add(product);
            _context.SaveChanges();

            var savedProduct = _context.Products.FirstOrDefault(p => p.ProductId == product.ProductId);
            Assert.NotNull(savedProduct);

            var oldProductName = savedProduct.ProductName;
            var oldProductDescription = savedProduct.ProductDescription;

            savedProduct.ProductName = "SQL";
            savedProduct.ProductDescription = "Grundläggande kurs om SQL.";
            savedProduct.UpdatedAt = new DateOnly(2024, 12, 6);

            _context.Products.Update(savedProduct);
            _context.SaveChanges();

            var updatedProduct = _context.Products.FirstOrDefault(p => p.ProductId == savedProduct.ProductId);
            Assert.NotNull(updatedProduct);

            _output.WriteLine($"Product updated from: {oldProductName} - {oldProductDescription} to: {updatedProduct.ProductName} - {updatedProduct.ProductDescription}");
        }
        [Fact]
        public void CanRetrieveOrder()
        {
            var customer = TestHelper.CreateTestCustomer();
            _context.Customers.Add(customer);
            _context.SaveChanges();

            var order = TestHelper.CreateTestOrder(customer.CustomerId);
            _context.OrderHistories.Add(order);
            _context.SaveChanges();

            var savedOrder = _context.OrderHistories
                .Include(o => o.Customer)
                .FirstOrDefault(o => o.OrderId == order.OrderId);

            Assert.NotNull(savedOrder);
            Assert.NotNull(savedOrder.Customer);
            Assert.Equal(customer.CustomerId, savedOrder.Customer.CustomerId);
            Assert.Equal(customer.CustomerFirstName, savedOrder.Customer.CustomerFirstName);
            Assert.Equal(customer.CustomerLastName, savedOrder.Customer.CustomerLastName);

            _output.WriteLine($"Order retrieved for customer: {savedOrder.Customer.CustomerFirstName} {savedOrder.Customer.CustomerLastName}, Order ID: {savedOrder.OrderId}");
        }
    }
}