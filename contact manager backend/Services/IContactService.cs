using contact_manager_backend.Models;

namespace contact_manager_backend.Services
{
    public interface IContactService
    {
        Task<List<Contact>> GetAllContactsAsync();
        Task<(bool, string)> AddContactAsync(Contact contact);
        (bool, string) AddContactToDictionary(Contact contact);
        Task<List<Contact>> GetContactsAsync(string name, string phone);
    }
}
