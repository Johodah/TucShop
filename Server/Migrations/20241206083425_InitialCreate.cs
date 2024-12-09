using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AdminName = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    AdminEmail = table.Column<string>(type: "TEXT", nullable: false),
                    AdminPassword = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    IsAdmin = table.Column<bool>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminId);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CustomerFirstName = table.Column<string>(type: "TEXT", maxLength: 25, nullable: false),
                    CustomerLastName = table.Column<string>(type: "TEXT", maxLength: 25, nullable: false),
                    CustomerEmail = table.Column<string>(type: "TEXT", nullable: false),
                    CustomerPassword = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Phone = table.Column<string>(type: "TEXT", nullable: false),
                    Address = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ProductName = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    ProductDescription = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    Stock = table.Column<int>(type: "INTEGER", nullable: false),
                    Location = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.CreateTable(
                name: "OrderHistories",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CustomerId = table.Column<int>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateOnly>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderHistories", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_OrderHistories_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    OrderDetailId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OrderId = table.Column<int>(type: "INTEGER", nullable: false),
                    ProductId = table.Column<int>(type: "INTEGER", nullable: false),
                    Quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetails", x => x.OrderDetailId);
                    table.ForeignKey(
                        name: "FK_OrderDetails_OrderHistories_OrderId",
                        column: x => x.OrderId,
                        principalTable: "OrderHistories",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Admins",
                columns: new[] { "AdminId", "AdminEmail", "AdminName", "AdminPassword", "CreatedAt", "IsAdmin", "UpdatedAt" },
                values: new object[] { 1, "admin.one@example.com", "Admin One", "admin123", new DateOnly(2021, 1, 1), true, new DateOnly(2021, 1, 1) });

            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "CustomerId", "Address", "CreatedAt", "CustomerEmail", "CustomerFirstName", "CustomerLastName", "CustomerPassword", "Phone", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, "123 Main St", new DateOnly(2021, 1, 1), "john.doe@example.com", "John", "Doe", "password123", "1234567890", new DateOnly(2021, 1, 1) },
                    { 2, "456 Elm St", new DateOnly(2021, 2, 1), "jane.smith@example.com", "Jane", "Smith", "password456", "0987654321", new DateOnly(2021, 2, 1) }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "CreatedAt", "Location", "Price", "ProductDescription", "ProductName", "Stock", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateOnly(2021, 10, 10), "Distans", 500m, "Lär dig grunderna i programmering", "Programmering Grund 1", 30, new DateOnly(2021, 10, 10) },
                    { 2, new DateOnly(2022, 10, 10), "Distans", 1000m, "Lär dig mer om HTML", "HTML", 30, new DateOnly(2022, 10, 10) },
                    { 3, new DateOnly(2022, 10, 10), "Linköping", 650m, "Lär dig mer om CSS och att göra en snygg hemsida", "CSS", 30, new DateOnly(2022, 10, 10) },
                    { 4, new DateOnly(2022, 10, 10), "Kalmar", 800m, "Lär dig mer om JavaScript", "JavaScript", 30, new DateOnly(2022, 10, 10) },
                    { 5, new DateOnly(2022, 10, 10), "Norrköping", 1200m, "Lär dig mer om React", "React", 30, new DateOnly(2022, 10, 10) }
                });

            migrationBuilder.InsertData(
                table: "OrderHistories",
                columns: new[] { "OrderId", "CreatedAt", "CustomerId", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateOnly(2021, 3, 1), 1, new DateOnly(2021, 3, 1) },
                    { 2, new DateOnly(2021, 4, 1), 2, new DateOnly(2021, 4, 1) },
                    { 3, new DateOnly(2023, 5, 1), 1, new DateOnly(2024, 5, 1) }
                });

            migrationBuilder.InsertData(
                table: "OrderDetails",
                columns: new[] { "OrderDetailId", "OrderId", "ProductId", "Quantity", "TotalPrice" },
                values: new object[,]
                {
                    { 1, 1, 1, 1, 500m },
                    { 2, 2, 2, 1, 1000m },
                    { 3, 2, 3, 1, 650m },
                    { 4, 2, 4, 1, 800m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_OrderId",
                table: "OrderDetails",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_ProductId",
                table: "OrderDetails",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderHistories_CustomerId",
                table: "OrderHistories",
                column: "CustomerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "OrderHistories");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
