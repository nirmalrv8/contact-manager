using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace contact_manager_backend.Migrations
{
    /// <inheritdoc />
    public partial class EnumTypesModification : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "status",
                table: "Contacts",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "contactType",
                table: "Contacts",
                newName: "ContactType");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Contacts",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "ContactType",
                table: "Contacts",
                newName: "contactType");
        }
    }
}
