const express = require("express");
const router = require("./routes/contactRoutes");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/contacts/', router);

app.listen(PORT, () => {
    console.log("Server has started");
})