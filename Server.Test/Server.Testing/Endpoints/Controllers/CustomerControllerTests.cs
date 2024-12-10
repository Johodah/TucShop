using System.Net;
using System.Net.Http.Json;
using Xunit;
using Server.Database.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace Server.Test.Server.Testing.Endpoints.Controllers
{
    public class CustomerControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public CustomerControllerTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetAllCustomers_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/customers");
            response.EnsureSuccessStatusCode();
            var customers = await response.Content.ReadFromJsonAsync<List<Customer>>();
            Assert.NotNull(customers);
        }

        [Fact]
        public async Task GetCustomerById_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/customers/1");
            response.EnsureSuccessStatusCode();
            var customer = await response.Content.ReadFromJsonAsync<Customer>();
            Assert.NotNull(customer);
        }

        [Fact]
        public async Task CreateCustomer_ReturnsCreated()
        {
            var newCustomer = new Customer { CustomerFirstName = "New", CustomerLastName = "Customer", CustomerEmail = "new.customer@example.com", CustomerPassword = "Password123!" };
            var response = await _client.PostAsJsonAsync("/api/customers", newCustomer);
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task UpdateCustomer_ReturnsNoContent()
        {
            var updatedCustomer = new Customer { CustomerId = 1, CustomerFirstName = "Updated", CustomerLastName = "Customer", CustomerEmail = "updated.customer@example.com", CustomerPassword = "UpdatedPassword123!" };
            var response = await _client.PutAsJsonAsync("/api/customers/1", updatedCustomer);
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }

        [Fact]
        public async Task DeleteCustomer_ReturnsNoContent()
        {
            var response = await _client.DeleteAsync("/api/customers/1");
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }
    }
}
