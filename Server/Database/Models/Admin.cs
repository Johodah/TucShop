namespace Server.Database.Models;
using System.ComponentModel.DataAnnotations;

public class Admin
{
    public int AdminId { get; set; }

    [Required]
    [MaxLength(50)]
    public string AdminName { get; set; }
    [Required]
    [EmailAddress]
    public string AdminEmail { get; set; }
    [Required]
    [MaxLength(20)]
    [MinLength(8)]
    [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$", ErrorMessage = "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.")]
    public string AdminPassword { get; set; }

    public bool IsAdmin { get; set; } = true;

    public DateOnly CreatedAt { get; set; }
    public DateOnly UpdatedAt { get; set; }
}
