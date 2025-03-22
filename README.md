# Fibud Matching Backend

This is a backend service for managing matches between clients and experts. It is built using [NestJS](https://nestjs.com/) and integrates with a database using Prisma.

## Features

- **Create Match**: Add a new match between a client and an expert.
- **Retrieve Matches**: Fetch matches based on specialization and rating filters.
- **Update Match**: Update details of an existing match.
- **Delete Match**: Remove a match from the database.
- **Error Handling**: Comprehensive error handling for invalid inputs and missing resources.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fibud-matching-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Configure your database connection in `prisma/schema.prisma`.
   - Run Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

## API Endpoints

### Matches

#### Create Match
- **POST** `/matches`
- **Body**:
  ```json
  {
    "clientName": "John Doe",
    "expertId": "expert-id"
  }
  ```
- **Response**: Created match object.

#### Get Matches
- **GET** `/matches`
- **Query Parameters**:
  - `specialization` (optional): Filter by expert specialization.
  - `rating` (optional): Filter by minimum rating (0-5).
- **Response**: List of matches.

#### Update Match
- **PUT** `/matches/:id`
- **Body**:
  ```json
  {
    "clientName": "Jane Doe",
    "expertId": "new-expert-id"
  }
  ```
- **Response**: Updated match object.

#### Delete Match
- **DELETE** `/matches/:id`
- **Response**: Deleted match confirmation.

## Error Handling

- **400 Bad Request**: Invalid input data.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Unexpected server error.

## Project Structure

```
src/
├── match/
│   ├── match.controller.ts  # Handles HTTP requests
│   ├── match.service.ts     # Business logic and database operations
│   ├── dto/
│   │   └── create-match.dto.ts  # Data transfer object for match creation
├── prisma/
│   └── prisma.service.ts    # Prisma database service
```

## Technologies Used

- **NestJS**: Backend framework.
- **Prisma**: ORM for database management.
- **TypeScript**: Programming language.
- **PostgreSQL**: Database (or any other database supported by Prisma).

## Running Tests

Run the following command to execute tests:
```bash
npm run test
```

## License

This project is licensed under the MIT License.