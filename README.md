# Fibud Matching Backend

A robust backend service for expert-client matching, built with **NestJS**, **Prisma**, and **PostgreSQL**.

## 🚀 Features

- **Expert Management**: CRUD operations for experts.
- **Client Matching**: Assign clients to experts based on specialization and rating.
- **Database Integration**: Uses **PostgreSQL** with Prisma ORM.
- **Validation & Error Handling**: Implements DTO validation using `class-validator`.
- **NestJS Modular Architecture**: Organized code structure following industry best practices.

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: class-validator

## 📂 Project Structure

```bash
fibud-matching-backend-task/
├── src/
│   ├── experts/
│   │   ├── experts.controller.ts
│   │   ├── experts.service.ts
│   │   ├── dto/
│   │   │   ├── create-expert.dto.ts
│   │   │   ├── update-expert.dto.ts
│   ├── match/
│   │   ├── match.controller.ts
│   │   ├── match.service.ts
│   │   ├── dto/
│   │   │   ├── create-match.dto.ts
│   ├── prisma/
│   │   ├── prisma.service.ts
│   ├── main.ts
├── prisma/
│   ├── schema.prisma
├── package.json
└── README.md
```

## 📌 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/afzalveparii/fibud-matching-backend-task.git
   cd fibud-matching-backend-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up `.env` file:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/fibud"
   DB_HOST="localhost"
   DB_PORT="db_Port"
   DB_USERNAME="db_Username"
   DB_PASSWORD="db_Password"
   DB_NAME="fibud_matching"
   NODE_ENV="development"
   PORT = 3001
   ```

4. Apply database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Run the application:
   ```bash
   npm run start:dev
   ```

## 🔥 API Endpoints

### Experts
- **Create Expert**
  ```http
  POST /experts
  ```
  **Request Body:**
  ```json
  {
    "name": "Dr. John Doe",
    "specialization": "Cardiologist",
    "availability": true,
    "rating": 4.8
  }
  ```

- **Get All Experts**
  ```http
  GET /experts
  ```

- **Get Expert by ID**
  ```http
  GET /experts/:id
  ```

- **Update Expert**
  ```http
  PATCH /experts/:id
  ```

- **Delete Expert**
  ```http
  DELETE /experts/:id
  ```

### Client Matching
- **Assign Client to Expert**
  ```http
  POST /matches
  ```
  **Request Body:**
  ```json
  {
    "clientName": "Alice Smith",
    "expertId": "550e8400-e29b-41d4-a716-446655440000"
  }
  ```

- **Get Matched Experts**
  ```http
  GET /matches?specialization=Neurologist&rating=4.5
  ```

## 🏗️ Future Improvements
- Add authentication & authorization
- Implement real-time updates with WebSockets
- Enhance search and filtering capabilities

## 🤝 Contributing
Feel free to submit issues and pull requests to improve this project.

## 📜 License
This project is licensed under the MIT License.

---

Made with ❤️ by [Afzal Vepari](https://github.com/afzalveparii) 🚀
