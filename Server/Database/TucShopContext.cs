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
        public DbSet<OrderDetail> OrderDetails { get; set; }


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
                },
                new Product
                {
                    ProductId = 3,
                    ProductName = "CSS",
                    ProductDescription = "Lär dig mer om CSS och att göra en snygg hemsida",
                    Price = 650,
                    Stock = 30,
                    Location = "Linköping",
                    CreatedAt = new DateOnly(2022, 10, 10),
                    UpdatedAt = new DateOnly(2022, 10, 10)
                },
                new Product
                {
                    ProductId = 4,
                    ProductName = "JavaScript",
                    ProductDescription = "Lär dig mer om JavaScript",
                    Price = 800,
                    Stock = 30,
                    Location = "Kalmar",
                    CreatedAt = new DateOnly(2022, 10, 10),
                    UpdatedAt = new DateOnly(2022, 10, 10)
                },
                new Product
                {
                    ProductId = 5,
                    ProductName = "React",
                    ProductDescription = "Lär dig mer om React",
                    Price = 1200,
                    Stock = 30,
                    Location = "Norrköping",
                    CreatedAt = new DateOnly(2022, 10, 10),
                    UpdatedAt = new DateOnly(2022, 10, 10)
                });

            modelBuilder.Entity<Customer>().HasData(
               new Customer
               {
                   CustomerId = 1,
                   CustomerFirstName = "John",
                   CustomerLastName = "Doe",
                   CustomerEmail = "john.doe@example.com",
                   CustomerPassword = "password123",
                   Phone = "1234567890",
                   Address = "123 Main St",
                   CreatedAt = new DateOnly(2021, 1, 1),
                   UpdatedAt = new DateOnly(2021, 1, 1)
               },
               new Customer
               {
                   CustomerId = 2,
                   CustomerFirstName = "Jane",
                   CustomerLastName = "Smith",
                   CustomerEmail = "jane.smith@example.com",
                   CustomerPassword = "password456",
                   Phone = "0987654321",
                   Address = "456 Elm St",
                   CreatedAt = new DateOnly(2021, 2, 1),
                   UpdatedAt = new DateOnly(2021, 2, 1)
               });


            modelBuilder.Entity<OrderHistory>().HasData(
                new OrderHistory { OrderId = 1, CustomerId = 1, CreatedAt = new DateOnly(2021, 3, 1), UpdatedAt = new DateOnly(2021, 3, 1) },
                new OrderHistory { OrderId = 2, CustomerId = 2, CreatedAt = new DateOnly(2021, 4, 1), UpdatedAt = new DateOnly(2021, 4, 1) },
                new OrderHistory { OrderId = 3, CustomerId = 1, CreatedAt = new DateOnly(2023, 5, 1), UpdatedAt = new DateOnly(2024, 5, 1) }
            );

            modelBuilder.Entity<OrderDetail>().HasData(
               new OrderDetail { OrderDetailId = 1, OrderId = 1, ProductId = 1, Quantity = 1, TotalPrice = 500 },
               new OrderDetail { OrderDetailId = 2, OrderId = 2, ProductId = 2, Quantity = 1, TotalPrice = 1000},
               new OrderDetail { OrderDetailId = 3, OrderId = 2, ProductId = 3, Quantity = 1, TotalPrice = 650},
               new OrderDetail { OrderDetailId = 4, OrderId = 2, ProductId = 4, Quantity = 1, TotalPrice = 800}
           );

            modelBuilder.Entity<Admin>().HasData(
                new Admin
                {
                    AdminId = 1,
                    AdminName = "Admin One",
                    AdminEmail = "admin.one@example.com",
                    AdminPassword = "admin123",
                    CreatedAt = new DateOnly(2021, 1, 1),
                    UpdatedAt = new DateOnly(2021, 1, 1)
                });

            
            modelBuilder.Entity<OrderHistory>()
                .HasKey(o => o.OrderId);

            modelBuilder.Entity<OrderDetail>()
                .HasKey(od => od.OrderDetailId);


            modelBuilder.Entity<OrderHistory>()
                .HasOne(o => o.Customer)
                .WithMany(c => c.OrderHistories)
                .HasForeignKey(o => o.CustomerId);

            modelBuilder.Entity<OrderDetail>()
                .HasOne(od => od.OrderHistory)
                .WithMany(o => o.OrderDetails)
                .HasForeignKey(od => od.OrderId);

            modelBuilder.Entity<OrderDetail>()
                .HasOne(od => od.Product)
                .WithMany(p => p.OrderDetails)
                .HasForeignKey(od => od.ProductId);


            modelBuilder.Entity<OrderHistory>()
                .HasIndex(o => o.CustomerId);
            modelBuilder.Entity<OrderDetail>()
                .HasIndex(od => od.OrderId);
            modelBuilder.Entity<OrderDetail>()
                .HasIndex(od => od.ProductId);
        }
    }
}

