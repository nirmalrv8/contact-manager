# Contact Manager

A **Contact Management** application built with a **C# .NET Core** backend and a **React** frontend. This app allows users to add, edit, view, and delete contacts, providing an intuitive interface and smooth user experience.

## Features

### Backend
- C# .NET Core Web API for RESTful CRUD operations
- Entity Framework Core for ORM and database interactions
- LINQ for efficient querying
- Exception handling for robust error management
- Tuples for returning multiple values
- Dictionary for key-value pair storage

### Frontend
- React with TypeScript for type-safe, scalable development
- Material-UI for modern, responsive UI components
- CSS for custom styling and layout
- HTML (TSX) for dynamic rendering

## Installation

### Backend
1. Clone the repository
    ```
    git clone https://github.com/username/contact-manager.git
    ```

2. Navigate to the backend directory
    ```
    cd contact-manager/backend
    ```

3. Restore packages
    ```
    dotnet restore
    ```

4. Migrate Database Tables
    ```
    dotnet ef migrations add MigrationName
    dotnet ef database update
    ```

5. Run the backend
    ```
    dotnet run --urls "http://localhost:5000"
    ```
    
### Frontend
1. Navigate to the frontend directory
    ```
    cd contact-manager/frontend
    ```
    
2. Install dependencies
    ```
    npm install
    ```

2. Run the frontend
    ```
    npm start
    ```

