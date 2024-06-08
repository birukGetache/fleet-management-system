const mongoose = require("mongoose");
const express = require("express");
const User = require("./schema"); 

const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27017/Fleet", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("MongoDB connected");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password })
    .then((user) => {
        if (user) {
            console.log("User authenticated");
            res.status(200).json({ message: "Login successful" });
            navigate("/dashboard");
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    })
    .catch((err) => {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Server error" });
    });
});
