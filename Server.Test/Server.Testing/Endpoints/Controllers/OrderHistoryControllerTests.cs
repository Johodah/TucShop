using System.Net;
using System.Net.Http.Json;
using Xunit;
using Server.Database.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace Server.Test.Server.Testing.Endpoints.Controllers
{
    public class OrderHistoryControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public OrderHistoryControllerTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetAllOrderHistories_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/orderhistories");
            response.EnsureSuccessStatusCode();
            var orderHistories = await response.Content.ReadFromJsonAsync<List<OrderHistory>>();
            Assert.NotNull(orderHistories);
        }

        [Fact]
        public async Task GetOrderHistoryById_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/orderhistories/1");
            response.EnsureSuccessStatusCode();
            var orderHistory = await response.Content.ReadFromJsonAsync<OrderHistory>();
            Assert.NotNull(orderHistory);
        }

        [Fact]
        public async Task CreateOrderHistory_ReturnsCreated()
        {
            var newOrderHistory = new OrderHistory { CustomerId = 1, CreatedAt = new DateOnly(2023, 5, 1), UpdatedAt = new DateOnly(2023, 5, 1) };
            var response = await _client.PostAsJsonAsync("/api/orderhistories", newOrderHistory);
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task UpdateOrderHistory_ReturnsNoContent()
        {
            var updatedOrderHistory = new OrderHistory { OrderId = 1, CustomerId = 1, CreatedAt = new DateOnly(2023, 5, 1), UpdatedAt = new DateOnly(2024, 5, 1) };
            var response = await _client.PutAsJsonAsync("/api/orderhistories/1", updatedOrderHistory);
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }

        [Fact]
        public async Task DeleteOrderHistory_ReturnsNoContent()
        {
            var response = await _client.DeleteAsync("/api/orderhistories/1");
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }
    }
}
