const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contacts/', contactRoutes);
app.use('/api/users/', userRoutes);
app.use(errorHandler);
connectDB();

app.listen(PORT, () => {
    console.log("Server has started");
})