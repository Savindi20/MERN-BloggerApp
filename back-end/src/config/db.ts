import express from "express";
import db from "mongoose";

// Create the express app
const app = express();

// connect to the database
db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    console.log("Database connected!");
    
    // Start the server after successfully connecting to the database
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB : ", error.message);
    process.exit(1);
  });
