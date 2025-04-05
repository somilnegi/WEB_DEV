import dotenv from "dotenv";
import { app } from "./app.js";
import { connect } from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})
const port = process.env.PORT || 7000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            
        })
    })
    .catch((err) => {
    console.log("MongoDB connection error", err);
    
})