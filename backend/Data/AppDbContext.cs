using Microsoft.EntityFrameworkCore;
using contact_manager_backend.Models;

namespace contact_manager_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
