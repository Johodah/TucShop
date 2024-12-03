namespace Server.Database.Models;
using System.ComponentModel.DataAnnotations;

public class Admin
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string AdminName { get; set; }
    [Required]
    [EmailAddress]
    public string AdminEmail { get; set; }
    [Required]
    [MaxLength(20)]
    public string AdminPassword { get; set; }

    public DateOnly CreatedAt { get; set; }
    public DateOnly UpdatedAt { get; set; }
}
