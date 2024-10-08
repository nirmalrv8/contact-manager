using Microsoft.AspNetCore.Mvc;
using contact_manager_backend.Models;
using contact_manager_backend.Services;
using Microsoft.EntityFrameworkCore;

namespace contact_manager_backend.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactController: ControllerBase
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
                return Ok(contacts);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching contacts." + ex.Message);
                return StatusCode(500, "An unexpected error occurred. Please try again later. Details: " + ex.Message);
            }
        }
    }
}
