using System.ComponentModel.DataAnnotations;

namespace Server.Database.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }

        [Required]
        [MaxLength(25)]
        public string CustomerFirstName { get; set; }

        [Required]
        [MaxLength(25)]
        public string CustomerLastName { get; set; }

        [Required]
        [EmailAddress]
        public string CustomerEmail { get; set; }

        [Required]
        [MaxLength(50)]
        [MinLength(8)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$", ErrorMessage = "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.")]
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
