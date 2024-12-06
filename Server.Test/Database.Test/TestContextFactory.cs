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
            var connection = CreateInMemoryDatabaseConnection();
            var options = CreateDbContextOptions(connection);

            var context = new TucShopContext(options);
            InitializeDatabase(context);

            return context;
        }

        public static void Destroy(TucShopContext context)
        {
            context.Database.CloseConnection();
            context.Dispose();
        }

        private static SqliteConnection CreateInMemoryDatabaseConnection()
        {
            var connection = new SqliteConnection("DataSource=:memory:");
            connection.Open();
            return connection;
        }

        private static DbContextOptions<TucShopContext> CreateDbContextOptions(SqliteConnection connection)
        {
            return new DbContextOptionsBuilder<TucShopContext>()
                .UseSqlite(connection)
                .Options;
        }

        private static void InitializeDatabase(TucShopContext context)
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
        }
    }
}
