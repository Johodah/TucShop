using System.Net;
using System.Net.Http.Json;
using Xunit;
using Server.Database.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace Server.Test.Server.Testing.Endpoints.Controllers
{
    public class ProductControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public ProductControllerTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task GetAllProducts_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/products");
            response.EnsureSuccessStatusCode();
            var products = await response.Content.ReadFromJsonAsync<List<Product>>();
            Assert.NotNull(products);
        }

        [Fact]
        public async Task GetProductById_ReturnsOk()
        {
            var response = await _client.GetAsync("/api/products/1");
            response.EnsureSuccessStatusCode();
            var product = await response.Content.ReadFromJsonAsync<Product>();
            Assert.NotNull(product);
        }

        [Fact]
        public async Task CreateProduct_ReturnsCreated()
        {
            var newProduct = new Product { ProductName = "New Product", Price = 100, Stock = 10, Location = "Test Location" };
            var response = await _client.PostAsJsonAsync("/api/products", newProduct);
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task UpdateProduct_ReturnsNoContent()
        {
            var updatedProduct = new Product { ProductId = 1, ProductName = "Updated Product", Price = 150, Stock = 20, Location = "Updated Location" };
            var response = await _client.PutAsJsonAsync("/api/products/1", updatedProduct);
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }

        [Fact]
        public async Task DeleteProduct_ReturnsNoContent()
        {
            var response = await _client.DeleteAsync("/api/products/1");
            Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        }
    }
}

