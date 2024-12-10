using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Database.Models;
using Microsoft.EntityFrameworkCore;
using Server.Database.Dto;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly TucShopContext _context;

        public AdminController(TucShopContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmins()
        {
            return await _context.Admins.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }
            return admin;
        }

        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(AdminDTO adminDto)
        {
            var admin = new Admin
            {
                AdminName = adminDto.AdminName,
                AdminEmail = adminDto.AdminEmail,
                AdminPassword = adminDto.AdminPassword,
                CreatedAt = DateOnly.FromDateTime(DateTime.Now),
                UpdatedAt = DateOnly.FromDateTime(DateTime.Now)
            };

            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAdmin), new { id = admin.AdminId }, admin);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmin(int id, AdminDTO adminDto)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            admin.AdminName = adminDto.AdminName;
            admin.AdminEmail = adminDto.AdminEmail;
            admin.AdminPassword = adminDto.AdminPassword;
            admin.UpdatedAt = DateOnly.FromDateTime(DateTime.Now);

            _context.Entry(admin).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin == null)
            {
                return NotFound();
            }

            _context.Admins.Remove(admin);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}