const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const mongoURI = "mongodb+srv://omondijohn669:Omondijohn669@cluster0.alwyuln.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((error) => console.error("MongoDB connection error:", error));

const app = express();
const PORT = process.env.PORT || 5000;

// CORS config
app.use(
    cors({
        origin: "http://localhost:5173", 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// Example test route
app.get('/', (req, res) => {
    res.send('🌱 ExploreKE server is up!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
