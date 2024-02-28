
# Express.js APIs

## Overview

A simple project that allows users to register themselves, create contacts and view them in a secured manner. Main implementations:

- **MVC Pattern:**
  The project follows the Model-View-Controller (MVC) architectural pattern. This separation of concerns makes the codebase more organized and maintainable.

- **Custom Middlewares:**
  Custom middleware functions have been implemented to handle various aspects of the application's request-response cycle. Middlewares are crucial for executing code logic before reaching the final route handler.

- **JWT Integration:**
  JSON Web Token (JWT) is integrated for user authentication and authorization. JWTs are issued upon user login and are used to secure routes that require authentication.


## Usage

### Prerequisites


### Installation and Setup


1. Clone the repository:

    ```bash
    git clone https://github.com/FalseGenius/nodejs-MVC.git
    cd nodejs-MVC
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the project root.
   - Place PORT (server port), CONNECTION_STRING (for mongoDB connection) and ACCESS_TOKEN_KEY (privateKey for JWT) in .env file.

4. Run the application:

    ```bash
    npm run dev
    ```

    The application should now be running on [http://localhost:PORT](http://localhost:5000).



## How it Works

All routes are under **/routes** folder. Controllers, Models and Middlewares are in their respective folders.

Start by creating a user, available at http://localhost:5001/api/users/register via POST request.

Inputs
```
{
  "username":"Formula",
  "email":"one@bil.com",
  "password":"123"
}
```

Output
```
{
  "status": "s",
  "user_id": "<user_id>",
  "email": "one@bil.com"
}
```

Have Fun!

### Support

If you encounter any issues while using this project, please open an issue in this repository. I'll do our best to help you out.
