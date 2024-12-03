using System;
using Xunit;
using Server.Database;
using Server.Database.Models;

namespace Server.Test.Database.Test
{
    public class DatabaseTests : IDisposable
    {
        private readonly TucShopContext _context;

        public DatabaseTests()
        {
            _context = TestContextFactory.Create();
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
        }

        [Fact]
        public void CanAddProduct()
        {
            var product = CreateTestProduct();

            _context.Products.Add(product);
            _context.SaveChanges();

            var savedProduct = _context.Products.FirstOrDefault(p => p.ProductName == product.ProductName);
            Assert.NotNull(savedProduct);
            Assert.Equal(product.ProductDescription, savedProduct.ProductDescription);
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