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
    }
}