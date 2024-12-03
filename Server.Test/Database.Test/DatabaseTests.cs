using System;
using System.Linq;
using Xunit;
using Server.Database;
using Server.Database.Models;
using Xunit.Abstractions;

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

            _context.Customers.Add(customer);
            _context.SaveChanges();

            var savedCustomer = _context.Customers.FirstOrDefault(c => c.CustomerEmail == customer.CustomerEmail);
            Assert.NotNull(savedCustomer);
            Assert.Equal(customer.CustomerName, savedCustomer.CustomerName);
            Assert.Equal(customer.CustomerEmail, savedCustomer.CustomerEmail);
            Assert.Equal(customer.CustomerPassword, savedCustomer.CustomerPassword);
            Assert.Equal(customer.Phone, savedCustomer.Phone);
            Assert.Equal(customer.Address, savedCustomer.Address);
            Assert.Equal(customer.CreatedAt, savedCustomer.CreatedAt);
            Assert.Equal(customer.UpdatedAt, savedCustomer.UpdatedAt);

            
            _output.WriteLine($"Customer added: {savedCustomer.CustomerName}, {savedCustomer.CustomerEmail}");
        }

        [Fact]
        public void CanRetrieveCustomer()
        {
            var customer = CreateTestCustomer();
            _context.Customers.Add(customer);
            _context.SaveChanges();

            var savedCustomer = _context.Customers.FirstOrDefault(c => c.CustomerEmail == customer.CustomerEmail);
            Assert.NotNull(savedCustomer);
            Assert.Equal(customer.CustomerName, savedCustomer.CustomerName);
            Assert.Equal(customer.CustomerEmail, savedCustomer.CustomerEmail);
            Assert.Equal(customer.CustomerPassword, savedCustomer.CustomerPassword);
            Assert.Equal(customer.Phone, savedCustomer.Phone);
            Assert.Equal(customer.Address, savedCustomer.Address);
            Assert.Equal(customer.CreatedAt, savedCustomer.CreatedAt);
            Assert.Equal(customer.UpdatedAt, savedCustomer.UpdatedAt);

            _output.WriteLine($"Customer retrieved: {savedCustomer.CustomerName}, {savedCustomer.CustomerEmail}");
        }

        [Fact]
        public void CanAddProduct()
        {
            var product = CreateTestProduct();

            _context.Products.Add(product);
            _context.SaveChanges();

            var savedProduct = _context.Products.FirstOrDefault(p => p.ProductName == product.ProductName);
            Assert.NotNull(savedProduct);
            Assert.Equal(product.ProductName, savedProduct.ProductName);
            Assert.Equal(product.ProductDescription, savedProduct.ProductDescription);
            Assert.Equal(product.Price, savedProduct.Price);
            Assert.Equal(product.Stock, savedProduct.Stock);
            Assert.Equal(product.Location, savedProduct.Location);
            Assert.Equal(product.CreatedAt, savedProduct.CreatedAt);
            Assert.Equal(product.UpdatedAt, savedProduct.UpdatedAt);

            _output.WriteLine($"Product added: {savedProduct.ProductName}, {savedProduct.ProductDescription}");
        }

        private Customer CreateTestCustomer()
        {
            return new Customer
            {
                CustomerName = "Test User",
                CustomerEmail = "test.user@example.com",
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
                Stock = 10,
                Location = "Test Location",
                CreatedAt = new DateOnly(2021, 5, 1),
                UpdatedAt = new DateOnly(2021, 5, 1)
            };
        }
    }
}