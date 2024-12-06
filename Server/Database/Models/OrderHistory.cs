using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Database.Models
{
    public class OrderHistory
    {
        public int OrderId { get; set; }

        [ForeignKey("Customer")]
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        public DateOnly CreatedAt { get; set; }
        public DateOnly UpdatedAt { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }

        [NotMapped]
        public decimal TotalPrice => OrderDetails?.Sum(od => od.TotalPrice) ?? 0;
    }
}

