import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./db/db.connect.js";
import router from "./Routes/user.routes.js";

// Configure dotenv at the top of your file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// dbConnection
dbConnection();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/user", router);

// Start server
app.listen(port, () => {
    console.log(`It's working on ${port}`);
});


