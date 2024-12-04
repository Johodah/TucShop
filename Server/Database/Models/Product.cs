using System.ComponentModel.DataAnnotations;

namespace Server.Database.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        [Required]
        [MaxLength(100)]
        public string ProductName { get; set; }

        [MaxLength(500)]
        public string ProductDescription { get; set; }

        [Range(0, double.MaxValue)]
        public decimal Price { get; set; }

        [Range(0, int.MaxValue)]
        public int Stock { get; set; } = 30;

        [Required]
        [MaxLength(100)]
        public string Location { get; set; }
        public DateOnly CreatedAt { get; set; }
        public DateOnly UpdatedAt { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
