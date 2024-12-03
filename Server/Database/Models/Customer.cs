using System.ComponentModel.DataAnnotations;

namespace Server.Database.Models
{
    public class Customer
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string CustomerName { get; set; }

        [Required]
        [EmailAddress]
        public string CustomerEmail { get; set; }

        [Required]
        [MaxLength(100)]
        public string CustomerPassword { get; set; }

        [Phone]
        public string Phone { get; set; }

        [MaxLength(100)]
        public string Address { get; set; }
        public DateOnly CreatedAt { get; set; }
        public DateOnly UpdatedAt { get; set; }

        public ICollection<OrderHistory> OrderHistories { get; set; }
    }
}
