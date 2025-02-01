# Sawaal Jawaab

Welcome to Sawaal-Jawaab, a simple FAQ management system built using **Express.js** and **MongoDB**. This revolutionary system allow users to register, log in, and access frequently asked questions (FAQs) in their own language, thus supporting the diversity of users of **Bharat**(**India**).

## Features

- **Helping Users with:**
  - Register a new user
  - Login to their existing account
  
- **Sawaal-Jawaab (Questionair):**
  - CRUD operations for FAQs (Create, Read, Update, Delete).
  - Translations for FAQs to support multiple languages.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up your `.env` file with MongoDB URI and any other necessary environment variables.

4. Start the application:
    ```bash
    npm start
    ```

The app will be running at `http://localhost:3000` by default.

## API Endpoints

### Authentication Routes (Auth)

#### **POST /register**

- **Description**: Registers a new user.
- **Request Body**:
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **Error (400)**: Invalid input or existing user.

#### **POST /login**

- **Description**: Logs in an existing user.
- **Request Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "Login successful",
      "token": "jwt-token"
    }
    ```
  - **Error (401)**: Invalid email or password.

### FAQ Routes (v1)

#### **GET /faq**

- **Description**: Retrieves a list of FAQs.
- **Query Parameters**:
  - `lang` (optional): The language code (default is `en`).
- **Response**:
  - **Success (200)**:
    ```json
    [
      {
        "question": "Question text",
        "answer": "Answer text"
      },
      {
        "question": "Another question",
        "answer": "Another answer"
      }
    ]
    ```
  - **Error (500)**: Internal server error.

#### **POST /faq**

- **Description**: Creates a new FAQ.
- **Request Body**:
    ```json
    {
      "question": "string",
      "answer": "string"
    }
    ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "question": "string",
      "answer": "string",
      "translations": {}
    }
    ```
  - **Error (500)**: Internal server error or invalid input.

#### **GET /faq/:id**

- **Description**: Retrieves a single FAQ by ID.
- **Parameters**:
  - `id`: The FAQ ID.
- **Query Parameters**:
  - `lang` (optional): The language code (default is `en`).
- **Response**:
  - **Success (200)**:
    ```json
    {
      "question": "translated question text",
      "answer": "translated answer text"
    }
    ```
  - **Error (404)**: FAQ not found.
  - **Error (500)**: Internal server error.

#### **PUT /faq/:id**

- **Description**: Updates an existing FAQ by ID.
- **Parameters**:
  - `id`: The FAQ ID.
- **Request Body**:
    ```json
    {
      "question": "updated question",
      "answer": "updated answer"
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "question": "updated question",
      "answer": "updated answer",
      "translations": {}
    }
    ```
  - **Error (404)**: FAQ not found.
  - **Error (500)**: Internal server error.

#### **DELETE /faq/:id**

- **Description**: Deletes an FAQ by ID.
- **Parameters**:
  - `id`: The FAQ ID.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "FAQ deleted successfully"
    }
    ```
  - **Error (404)**: FAQ not found.
  - **Error (500)**: Internal server error.

### User Routes (v1)

#### **GET /user**

- **Description**: Retrieves the details of the current logged-in user.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```
  - **Error (401)**: Unauthorized (if not logged in).

#### **PATCH /user**

- **Description**: Updates the logged-in user's details.
- **Request Body**:
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "User updated successfully",
      "user": {
        "username": "updated string",
        "email": "updated string"
      }
    }
    ```
  - **Error (400)**: Invalid input.

#### **DELETE /user**

- **Description**: Deletes the current logged-in user.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "User deleted successfully"
    }
    ```
  - **Error (401)**: Unauthorized (if not logged in).

## Database

This application uses MongoDB for storing user information and FAQ data. The FAQ schema also includes a translations map that stores translations for different languages.

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB ODM
- **@vitalets/google-translate-api**: Library for language translation
- **dotenv**: Environment variable management
- **body-parser**: Middleware to parse JSON requests

## Running Tests

To run tests, ensure that you have set up test configurations and MongoDB in the environment. Then use a testing library like Jest or Mocha to run the tests.

## Contributing

Feel free to fork this project and submit issues or pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

### What’s Included:
- Detailed API documentation with all routes and their respective request/response formats.
- Full descriptions of parameters, body data, and response examples for both success and error cases.
- Information about the database and dependencies.

This version should serve as a thorough reference for both developers and users interacting with your API. Let me know if there's anything more you'd like to add!
