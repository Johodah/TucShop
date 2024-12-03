using System;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Server.Database;

namespace Server.Test.Database.Test
{
    public static class TestContextFactory
    {
        public static TucShopContext Create()
        {
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();

            var options = new DbContextOptionsBuilder<TucShopContext>()
                .UseSqlite(connection)
                .Options;

            var context = new TucShopContext(options);
            context.Database.EnsureCreated();
            return context;
        }

        public static void Destroy(TucShopContext context)
        {
            context.Database.CloseConnection();
            context.Dispose();
        }
    }
}