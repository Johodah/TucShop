using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Database.Models
{
    public class OrderHistory
    {
        public int OrderId { get; set; }

        [ForeignKey("Customer")]
        public int CustomerId { get; set; }

        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }

        [Range(0, float.MaxValue)]
        public float TotalPrice { get; set; }
        public DateOnly CreatedAt { get; set; }
        public DateOnly UpdatedAt { get; set; }

        public Customer Customer { get; set; }
        public Product Product { get; set; }
    }
}
