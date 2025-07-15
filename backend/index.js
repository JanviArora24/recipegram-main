// Step 1: Import required packages
const express = require('express');
const cors = require('cors');

// Step 2: Create express app
const app = express();

// Step 3: Add middlewares
app.use(cors()); // Allow frontend (like React) to access backend
app.use(express.json()); // Parse incoming JSON data from form

// Step 4: Create a GET route (for testing)
app.get("/", (req, res) => {
    res.send("✅ Backend is working!");
});

// Step 5: Create a POST route (for React Signup form)
app.post("/api/register", (req, res) => {
    console.log("📩 Received data:", req.body);
    res.json({ message: "Signup data received!" });
});

// Step 6: Start the server
app.listen(5000, () => {
    console.log("🚀 Server is running on http://localhost:5000");
});
