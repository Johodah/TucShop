﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Server.Database;

#nullable disable

namespace Server.Migrations
{
    [DbContext(typeof(TucShopContext))]
    partial class TucShopContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.0");

            modelBuilder.Entity("Server.Database.Models.Admin", b =>
                {
                    b.Property<int>("AdminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AdminEmail")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("AdminName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("AdminPassword")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<DateOnly>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("UpdatedAt")
                        .HasColumnType("TEXT");

                    b.HasKey("AdminId");

                    b.ToTable("Admins");

                    b.HasData(
                        new
                        {
                            AdminId = 1,
                            AdminEmail = "admin.one@example.com",
                            AdminName = "Admin One",
                            AdminPassword = "admin123",
                            CreatedAt = new DateOnly(2021, 1, 1),
                            IsAdmin = true,
                            UpdatedAt = new DateOnly(2021, 1, 1)
                        });
                });

            modelBuilder.Entity("Server.Database.Models.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<DateOnly>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("CustomerEmail")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CustomerFirstName")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("TEXT");

                    b.Property<string>("CustomerLastName")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("TEXT");

                    b.Property<string>("CustomerPassword")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateOnly>("UpdatedAt")
                        .HasColumnType("TEXT");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            CustomerId = 1,
                            Address = "123 Main St",
                            CreatedAt = new DateOnly(2021, 1, 1),
                            CustomerEmail = "john.doe@example.com",
                            CustomerFirstName = "John",
                            CustomerLastName = "Doe",
                            CustomerPassword = "password123",
                            Phone = "1234567890",
                            UpdatedAt = new DateOnly(2021, 1, 1)
                        },
                        new
                        {
                            CustomerId = 2,
                            Address = "456 Elm St",
                            CreatedAt = new DateOnly(2021, 2, 1),
                            CustomerEmail = "jane.smith@example.com",
                            CustomerFirstName = "Jane",
                            CustomerLastName = "Smith",
                            CustomerPassword = "password456",
                            Phone = "0987654321",
                            UpdatedAt = new DateOnly(2021, 2, 1)
                        });
                });

            modelBuilder.Entity("Server.Database.Models.OrderDetail", b =>
                {
                    b.Property<int>("OrderDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("OrderId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ProductId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("TEXT");

                    b.HasKey("OrderDetailId");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderDetails");

                    b.HasData(
                        new
                        {
                            OrderDetailId = 1,
                            OrderId = 1,
                            ProductId = 1,
                            Quantity = 1,
                            TotalPrice = 500m
                        },
                        new
                        {
                            OrderDetailId = 2,
                            OrderId = 2,
                            ProductId = 2,
                            Quantity = 1,
                            TotalPrice = 1000m
                        },
                        new
                        {
                            OrderDetailId = 3,
                            OrderId = 2,
                            ProductId = 3,
                            Quantity = 1,
                            TotalPrice = 650m
                        },
                        new
                        {
                            OrderDetailId = 4,
                            OrderId = 2,
                            ProductId = 4,
                            Quantity = 1,
                            TotalPrice = 800m
                        });
                });

            modelBuilder.Entity("Server.Database.Models.OrderHistory", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<int>("CustomerId")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("UpdatedAt")
                        .HasColumnType("TEXT");

                    b.HasKey("OrderId");

                    b.HasIndex("CustomerId");

                    b.ToTable("OrderHistories");

                    b.HasData(
                        new
                        {
                            OrderId = 1,
                            CreatedAt = new DateOnly(2021, 3, 1),
                            CustomerId = 1,
                            UpdatedAt = new DateOnly(2021, 3, 1)
                        },
                        new
                        {
                            OrderId = 2,
                            CreatedAt = new DateOnly(2021, 4, 1),
                            CustomerId = 2,
                            UpdatedAt = new DateOnly(2021, 4, 1)
                        },
                        new
                        {
                            OrderId = 3,
                            CreatedAt = new DateOnly(2023, 5, 1),
                            CustomerId = 1,
                            UpdatedAt = new DateOnly(2024, 5, 1)
                        });
                });

            modelBuilder.Entity("Server.Database.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProductDescription")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("TEXT");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<int>("Stock")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("UpdatedAt")
                        .HasColumnType("TEXT");

                    b.HasKey("ProductId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            CreatedAt = new DateOnly(2021, 10, 10),
                            Location = "Distans",
                            Price = 500m,
                            ProductDescription = "Lär dig grunderna i programmering",
                            ProductName = "Programmering Grund 1",
                            Stock = 30,
                            UpdatedAt = new DateOnly(2021, 10, 10)
                        },
                        new
                        {
                            ProductId = 2,
                            CreatedAt = new DateOnly(2022, 10, 10),
                            Location = "Distans",
                            Price = 1000m,
                            ProductDescription = "Lär dig mer om HTML",
                            ProductName = "HTML",
                            Stock = 30,
                            UpdatedAt = new DateOnly(2022, 10, 10)
                        },
                        new
                        {
                            ProductId = 3,
                            CreatedAt = new DateOnly(2022, 10, 10),
                            Location = "Linköping",
                            Price = 650m,
                            ProductDescription = "Lär dig mer om CSS och att göra en snygg hemsida",
                            ProductName = "CSS",
                            Stock = 30,
                            UpdatedAt = new DateOnly(2022, 10, 10)
                        },
                        new
                        {
                            ProductId = 4,
                            CreatedAt = new DateOnly(2022, 10, 10),
                            Location = "Kalmar",
                            Price = 800m,
                            ProductDescription = "Lär dig mer om JavaScript",
                            ProductName = "JavaScript",
                            Stock = 30,
                            UpdatedAt = new DateOnly(2022, 10, 10)
                        },
                        new
                        {
                            ProductId = 5,
                            CreatedAt = new DateOnly(2022, 10, 10),
                            Location = "Norrköping",
                            Price = 1200m,
                            ProductDescription = "Lär dig mer om React",
                            ProductName = "React",
                            Stock = 30,
                            UpdatedAt = new DateOnly(2022, 10, 10)
                        });
                });

            modelBuilder.Entity("Server.Database.Models.OrderDetail", b =>
                {
                    b.HasOne("Server.Database.Models.OrderHistory", "OrderHistory")
                        .WithMany("OrderDetails")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Server.Database.Models.Product", "Product")
                        .WithMany("OrderDetails")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OrderHistory");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("Server.Database.Models.OrderHistory", b =>
                {
                    b.HasOne("Server.Database.Models.Customer", "Customer")
                        .WithMany("OrderHistories")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("Server.Database.Models.Customer", b =>
                {
                    b.Navigation("OrderHistories");
                });

            modelBuilder.Entity("Server.Database.Models.OrderHistory", b =>
                {
                    b.Navigation("OrderDetails");
                });

            modelBuilder.Entity("Server.Database.Models.Product", b =>
                {
                    b.Navigation("OrderDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
