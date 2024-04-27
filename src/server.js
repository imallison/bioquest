const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const articleRoutes = require("./routes/articles");
app.use("/api/articles", articleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the Server
const PORT = process.env.PORT || 5000; // Updated to match the .env PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
