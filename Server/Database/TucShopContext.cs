using Microsoft.EntityFrameworkCore;
using Server.Database.Models;

namespace Server.Database
{
    public class TucShopContext : DbContext
    {

        public TucShopContext(DbContextOptions<TucShopContext> option) : base(option)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<OrderHistory> OrderHistories { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Admin> Admins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=TucShop.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    ProductId = 1,
                    ProductName = "Programmering Grund 1",
                    ProductDescription = "Lär dig grunderna i programmering",
                    Price = 500,
                    Stock = 30,
                    Location = "Distans",
                    CreatedAt = new DateOnly(2021, 10, 10),
                    UpdatedAt = new DateOnly(2021, 10, 10)
                },
                new Product
                {
                    ProductId = 2,
                    ProductName = "HTML",
                    ProductDescription = "Lär dig mer om HTML",
                    Price = 1000,
                    Stock = 30,
                    Location = "Distans",
                    CreatedAt = new DateOnly(2022, 10, 10),
                    UpdatedAt = new DateOnly(2022, 10, 10)
                });

            modelBuilder.Entity<Customer>().HasData(
               new Customer
               {
                   Id = 1,
                   CustomerName = "John Doe",
                   CustomerEmail = "john.doe@example.com",
                   CustomerPassword = "password123",
                   Phone = "1234567890",
                   Address = "123 Main St",
                   CreatedAt = new DateOnly(2021, 1, 1),
                   UpdatedAt = new DateOnly(2021, 1, 1)
               },
               new Customer
               {
                   Id = 2,
                   CustomerName = "Jane Smith",
                   CustomerEmail = "jane.smith@example.com",
                   CustomerPassword = "password456",
                   Phone = "0987654321",
                   Address = "456 Elm St",
                   CreatedAt = new DateOnly(2021, 2, 1),
                   UpdatedAt = new DateOnly(2021, 2, 1)
               });


            modelBuilder.Entity<OrderHistory>().HasData(
                new OrderHistory
                {
                    OrderId = 1,
                    CustomerId = 1,
                    ProductId = 1,
                    Quantity = 2,
                    TotalPrice = 1000,
                    CreatedAt = new DateOnly(2021, 3, 1),
                    UpdatedAt = new DateOnly(2021, 3, 1)
                },
                new OrderHistory
                {
                    OrderId = 2,
                    CustomerId = 2,
                    ProductId = 2,
                    Quantity = 1,
                    TotalPrice = 1000,
                    CreatedAt = new DateOnly(2021, 4, 1),
                    UpdatedAt = new DateOnly(2021, 4, 1)
                });

            modelBuilder.Entity<Admin>().HasData(
                new Admin
                {
                    Id = 1,
                    AdminName = "Admin One",
                    AdminEmail = "admin.one@example.com",
                    AdminPassword = "admin123",
                    CreatedAt = new DateOnly(2021, 1, 1),
                    UpdatedAt = new DateOnly(2021, 1, 1)
                });

            // Define primary key for OrderHistory
            modelBuilder.Entity<OrderHistory>()
                .HasKey(o => o.OrderId);

            //relationships
            modelBuilder.Entity<OrderHistory>()
                .HasOne<Customer>(o => o.Customer)
                .WithMany(c => c.OrderHistories)
                .HasForeignKey(o => o.CustomerId);

            modelBuilder.Entity<OrderHistory>()
                .HasOne<Product>(o => o.Product)
                .WithMany(p => p.OrderHistories)
                .HasForeignKey(o => o.ProductId);

            //indexes
            modelBuilder.Entity<OrderHistory>()
                .HasIndex(o => o.CustomerId);
            modelBuilder.Entity<OrderHistory>()
                .HasIndex(o => o.ProductId);
        }
    }
}

