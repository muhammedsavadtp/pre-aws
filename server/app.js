const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const port = 4001;

// Connect to MongoDB
connectDB();

// Include routes


app.use(cors());
app.use(express.json());

// Use routes
app.use("/", require("./src/routes/indexRoutes"));
app.use("/auth", require("./src/routes/authRoutes"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
