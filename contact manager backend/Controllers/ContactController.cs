using Microsoft.AspNetCore.Mvc;
using contact_manager_backend.Models;
using contact_manager_backend.Services;
using Microsoft.EntityFrameworkCore;

namespace contact_manager_backend.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService, ILogger<ContactController> logger)
        {
            _logger = logger;
            _contactService = contactService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Contact>>> GetContacts()
        {
            try
            {
                _logger.LogInformation("Fetching contacts.");
                var contacts = await _contactService.GetAllContactsAsync();
                _logger.LogInformation("All contacts fetched successfully");
                return Ok(contacts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching contacts." + ex.Message);
                return StatusCode(500, "An unexpected error occurred. Details: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> CreateContact([FromBody] Contact contact)
        {
            if (contact == null)
            {
                return BadRequest("Contact information is missing");
            }

            try
            {
                var result = await _contactService.AddContactAsync(contact);
                if (!result.Item1)
                {
                    _logger.LogError("An error occurred while creating the contact." + result.Item2);
                    return StatusCode(500, "An unexpected error occurred. Details: " + result.Item2);
                }
                else
                {
                    _logger.LogInformation("Contact ${contact.Name} added successfully");
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating the contact." + ex.Message);
                return StatusCode(500, "An unexpected error occurred. Details: " + ex.Message);
            }
        }

        [HttpGet("filter")]
        public async Task<ActionResult> FilterContacts([FromQuery] string name, [FromQuery] string phone)
        {
            try
            {
                List<Contact> contacts = await _contactService.GetContactsAsync(name, phone);

                if (contacts == null || !contacts.Any())
                {
                    return NotFound("No contacts found matching the criteria.");
                }
                _logger.LogInformation("Contact filtered and fetched successfully");
                return Ok(contacts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while filtering the contacts." + ex.Message);
                return StatusCode(500, "An unexpected error occurred. Details: " + ex.Message);
            }
        }
    }
}
