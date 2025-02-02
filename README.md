# Sawaal Jawaab

Sawaal-Jawaab is a simple FAQ management system built using **Express.js** and **MongoDB**, harnessing the special features by providing users to register, log in, and access FAQs, thus embracing the diversity of **Bharat**

Feel free to access it here too 
![Atlas Connection](images\done_success.png)
## Features

- **Sawaal-Jawaab Users:**
  - Register a new user
  - Allow login to thier existing account
  
- **FAQ Management:**
  - CRUD operations for FAQs (Create, Read, Update, Delete)
  - Translations for FAQs to support various languages.

## Installation

1. Clone the repository:
    ```bash
    git clone <https://github.com/Manu04Tiwari/SawaalJawaab.git>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up your `.env` file with MongoDB URI and any other necessary environment variables.
   ```bash
   DB_URL=mongodb+srv://User1:Martina04@clustersawaaljawab.5dbw2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSawaalJawab
   PORT=3002
   ```

4. Start the application:
    ```bash
    npm run dev
    ```

The app will be running at `http://localhost:3000` by default.

![Database Connected](images\connected.png)
## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB ODM
- **@vitalets/google-translate-api**: Library for language translation
- **dotenv**: Environment variable management
- **body-parser**: Middleware to parse JSON requests

## Running Tests

To run tests, ensure that you have set up test configurations and MongoDB in the environment. Then use a testing library like Jest or Mocha to run the tests.
![Running Successfully](images\running.png)

## Contributing

Feel free to fork this project and submit issues or pull requests. All contributions are welcome!

## Contact
Feel free to reach me out at 
Github: [Manu04Tiwari](https://github.com/Manu04Tiwari)
Email:  [Marttiwari8219@gmail.com](marttiwari8219@gmail.com)