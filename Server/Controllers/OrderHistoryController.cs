using Microsoft.AspNetCore.Mvc;
using Server.Database;
using Server.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderHistoryController : ControllerBase
    {
        private readonly TucShopContext _context;

        public OrderHistoryController(TucShopContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderHistory>>> GetOrderHistories()
        {
            return await _context.OrderHistories.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderHistory>> GetOrderHistory(int id)
        {
            var orderHistory = await _context.OrderHistories.FindAsync(id);
            if (orderHistory == null)
            {
                return NotFound();
            }
            return orderHistory;
        }

        [HttpPost]
        public async Task<ActionResult<OrderHistory>> PostOrderHistory(OrderHistory orderHistory)
        {
            _context.OrderHistories.Add(orderHistory);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOrderHistory), new { id = orderHistory.OrderId }, orderHistory);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderHistory(int id, OrderHistory orderHistory)
        {
            if (id != orderHistory.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(orderHistory).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderHistory(int id)
        {
            var orderHistory = await _context.OrderHistories.FindAsync(id);
            if (orderHistory == null)
            {
                return NotFound();
            }

            _context.OrderHistories.Remove(orderHistory);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}