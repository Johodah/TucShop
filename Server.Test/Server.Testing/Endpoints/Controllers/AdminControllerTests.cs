using System.Net;
using System.Net.Http.Json;
using Server.Database.Models;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using Xunit;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Testing;

namespace Server.Test.Server.Testing.Endpoints.Controllers
{
        public class AdminControllerTests : IClassFixture<WebApplicationFactory<Program>>
        {
            private readonly HttpClient _client;

            public AdminControllerTests(WebApplicationFactory<Program> factory)
            {
                _client = factory.CreateClient();
            }

            [Fact]
            public async Task GetAllAdmins_ReturnsOk()
            {
                var response = await _client.GetAsync("/api/admins");
                response.EnsureSuccessStatusCode();
                var admins = await response.Content.ReadFromJsonAsync<List<Admin>>();
                Assert.NotNull(admins);
            }

            [Fact]
            public async Task GetAdminById_ReturnsOk()
            {
                var response = await _client.GetAsync("/api/admins/1");
                response.EnsureSuccessStatusCode();
                var admin = await response.Content.ReadFromJsonAsync<Admin>();
                Assert.NotNull(admin);
            }

            [Fact]
            public async Task CreateAdmin_ReturnsCreated()
            {
                var newAdmin = new Admin { AdminName = "New Admin", AdminEmail = "new.admin@example.com", AdminPassword = "Password123!" };
                var response = await _client.PostAsJsonAsync("/api/admins", newAdmin);
                Assert.Equal(HttpStatusCode.Created, response.StatusCode);
            }

            [Fact]
            public async Task UpdateAdmin_ReturnsNoContent()
            {
                var updatedAdmin = new Admin { AdminId = 1, AdminName = "Updated Admin", AdminEmail = "updated.admin@example.com", AdminPassword = "UpdatedPassword123!" };
                var response = await _client.PutAsJsonAsync("/api/admins/1", updatedAdmin);
                Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
            }

            [Fact]
            public async Task DeleteAdmin_ReturnsNoContent()
            {
                var response = await _client.DeleteAsync("/api/admins/1");
                Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
            }
        }
    }
