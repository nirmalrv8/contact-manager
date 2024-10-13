using contact_manager_backend.Data;
using contact_manager_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace contact_manager_backend.Services
{
    public class ContactService : IContactService
    {
        private readonly AppDbContext _context;
        private Dictionary<int, Contact> contactDictionary = new Dictionary<int, Contact>();

        public delegate void ContactAddedHandler(Contact contact);
        public event ContactAddedHandler OnContactAdded;
        public ContactService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Contact>> GetAllContactsAsync()
        {
            try
            {
                List<Contact> listOfContacts = await _context.Contacts.ToListAsync();
                // foreach (var contact in listOfContacts) {
                //     string statusString = Enum.GetName(typeof(Status), contact.Status);
                //     contact.Status = statusString;
                // }
                return listOfContacts;
            }
            catch (Exception ex)
            {
                throw new Exception("A database error occurred.", ex);
            }
            
        }

        public async Task<(bool, string)> AddContactAsync(Contact contact)
        {
            try
            {
                var existingContact = await _context.Contacts
                    .Where(c => c.Name == contact.Name && c.Phone == contact.Phone)
                    .FirstOrDefaultAsync();

                if (existingContact != null)
                {
                    return (false, "Contact already exists");
                }

                await _context.Contacts.AddAsync(contact);
                await _context.SaveChangesAsync();
                return (true, "Contact Added successfully");
            }
            catch (Exception ex)
            {
                throw new Exception("A database error occurred.", ex);
            }
        }

        public (bool, string) AddContactToDictionary(Contact contact)
        {
            var contactExists = contactDictionary.ContainsKey(contact.Id);
            const int maxContacts = 1000;

            if (contactDictionary.Count >= 1000)
            {
                return (false, "Maximum number of contacts reached");
            }

            if (contactExists)
            {
                return (false, "Contact already exists");
            }

            contactDictionary.Add(contact.Id, contact);
            OnContactAdded.Invoke(contact);
            return (true, "Contact added successfully");
        }

        public async Task<List<Contact>> GetContactsAsync(string name = null, string phone = null)
        {
            var query = _context.Contacts.AsQueryable();

            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(c => c.Name.Contains(name));
            }

            if (!string.IsNullOrEmpty(phone))
            {
                query = query.Where(c => c.Phone.Contains(phone));
            }

            var filteredContacts = await query.ToListAsync();
            List<Contact> processedContacts = new List<Contact>();

            foreach (var contact in filteredContacts)
            {
                contact.Name = contact.Name.ToUpper();
                processedContacts.Add(contact);
            }

            processedContacts = processedContacts.OrderBy(c => c.Name).ToList();
            return processedContacts;
        }
    }
}
