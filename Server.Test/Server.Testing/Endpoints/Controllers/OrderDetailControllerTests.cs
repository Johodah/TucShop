using System.Net;
using System.Net.Http.Json;
using Xunit;
using Server.Database.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace Server.Test.Server.Testing.Endpoints.Controllers
{
    public class OrderDetailControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public OrderDetailControllerTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetAllOrderDetails_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/orderdetails");
            response.EnsureSuccessStatusCode();
            var orderDetails = await response.Content.ReadFromJsonAsync<List<OrderDetail>>();
            Assert.NotNull(orderDetails);
        }

        [Fact]
        public async Task GetOrderDetailById_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/orderdetails/1");
            response.EnsureSuccessStatusCode();
            var orderDetail = await response.Content.ReadFromJsonAsync<OrderDetail>();
            Assert.NotNull(orderDetail);
        }

        [Fact]
        public async Task CreateOrderDetail_ReturnsCreated()
        {
            var newOrderDetail = new OrderDetail { OrderId = 1, ProductId = 1, Quantity = 1, TotalPrice = 100 };
            var response = await _client.PostAsJsonAsync("/api/orderdetails", newOrderDetail);
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task UpdateOrderDetail_ReturnsNoContent()
        {
            var updatedOrderDetail = new OrderDetail { OrderDetailId = 1, OrderId = 1, ProductId = 1, Quantity = 2, TotalPrice = 200 };
            var response = await _client.PutAsJsonAsync("/api/orderdetails/1", updatedOrderDetail);
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }

        [Fact]
        public async Task DeleteOrderDetail_ReturnsNoContent()
        {
            var response = await _client.DeleteAsync("/api/orderdetails/1");
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }
    }
}
