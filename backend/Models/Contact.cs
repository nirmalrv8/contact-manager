using System.ComponentModel.DataAnnotations.Schema;

namespace contact_manager_backend.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public ContactType ContactType { get; set; }
        public string Address { get; set; }
        public Status Status {get; set; }
        
        [NotMapped]
        public string StatusString
        {
            get => Enum.GetName(typeof(Status), Status);
        }

        [NotMapped]
        public string ContactTypeString
        {
            get => Enum.GetName(typeof(ContactType), ContactType);
        }
    }
}
