using contact_manager_backend.Models;

namespace contact_manager_backend.Services
{
    public interface IContactService
    {
        Task<List<Contact>> GetAllContactsAsync();
    }
}
