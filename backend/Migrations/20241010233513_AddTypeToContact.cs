using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace contact_manager_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddTypeToContact : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "contactType",
                table: "Contacts",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "contactType",
                table: "Contacts");
        }
    }
}
