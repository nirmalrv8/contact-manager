using contact_manager_backend.Data;
using contact_manager_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace contact_manager_backend.Services
{
    public class ContactService : IContactService
    {
        private readonly AppDbContext _context;
        public ContactService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Contact>> GetAllContactsAsync()
        {
            try
            {
                return await _context.Contacts.ToListAsync();
            }
            catch (Exception ex)
            {
                // log here
                throw new Exception("A database error occurred.", ex);
            }
            
        }
    }
}
