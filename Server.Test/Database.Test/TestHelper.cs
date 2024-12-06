using Server.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Test.Database.Test
{
    public static class TestHelper
    {
        public static Customer CreateTestCustomer()
        {
            return new Customer
            {
                CustomerFirstName = "Test",
                CustomerLastName = "Testsson",
                CustomerEmail = "test.user@example.com",
                CustomerPassword = "Password123",
                Phone = "1234567890",
                Address = "1234 Test St",
                CreatedAt = new DateOnly(2021, 1, 1),
                UpdatedAt = new DateOnly(2021, 1, 1)
            };
        }

        public static Product CreateTestProduct()
        {
            return new Product
            {
                ProductName = "Test Product",
                ProductDescription = "This is a test product",
                Price = 399,
                Stock = 30,
                Location = "Test Location",
                CreatedAt = new DateOnly(2021, 1, 1),
                UpdatedAt = new DateOnly(2021, 1, 1)
            };
        }

        public static void AssertCustomerProperties(Customer expected, Customer actual)
        {
            Assert.NotNull(actual);
            Assert.Equal(expected.CustomerFirstName, actual.CustomerFirstName);
            Assert.Equal(expected.CustomerLastName, actual.CustomerLastName);
            Assert.Equal(expected.CustomerEmail, actual.CustomerEmail);
            Assert.Equal(expected.CustomerPassword, actual.CustomerPassword);
            Assert.Equal(expected.Phone, actual.Phone);
            Assert.Equal(expected.Address, actual.Address);
            Assert.Equal(expected.CreatedAt, actual.CreatedAt);
            Assert.Equal(expected.UpdatedAt, actual.UpdatedAt);
        }

        public static void AssertProductProperties(Product expected, Product actual)
        {
            Assert.NotNull(actual);
            Assert.Equal(expected.ProductName, actual.ProductName);
            Assert.Equal(expected.ProductDescription, actual.ProductDescription);
            Assert.Equal(expected.Price, actual.Price);
            Assert.Equal(expected.Stock, actual.Stock);
            Assert.Equal(expected.Location, actual.Location);
            Assert.Equal(expected.CreatedAt, actual.CreatedAt);
            Assert.Equal(expected.UpdatedAt, actual.UpdatedAt);
        }
    }
}
