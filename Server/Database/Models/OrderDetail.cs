using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Database.Models
{
    public class OrderDetail
    {
        public int OrderDetailId { get; set; }

        [ForeignKey("OrderHistory")]
        public int OrderId { get; set; }
        public OrderHistory OrderHistory { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        [Range(0, double.MaxValue)]
        public decimal TotalPrice { get; set; }
    }
}
