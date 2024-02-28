
# Express.js APIs

## Overview

A simple project that allows users to register themselves, create contacts and view them in a secured manner. Main implementations:

 - MVC pattern 
 - Custom Middlewares
 - JWT integration


## Installation and Setup

Here are the steps to setup the project:

Clone the project repository: git clone https://github.com/FalseGenius/nodejs-MVC.git.

Navigate to the project directory: ***cd nodejs-MVC***.

Install the required packages packages: ***npm install***.

This application is written using *express.js*.

Place PORT (server port), CONNECTION_STRING (for mongoDB connection) and ACCESS_TOKEN_KEY (privateKey for JWT) in .env file.

Spin up the server using the following command,
```
npm run dev

```


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
