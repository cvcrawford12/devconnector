const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/keys");

// Routes
const auth = require("./routes/api/auth");
const posts = require("./routes/api/posts")
const profile = require("./routes/api/profile")

const app = express();

// Connect DB
const db = config.devURI;

// Connect Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// const db = require("../config/keys").prodURI;

app.get("/", (req, res) => res.send("Hello World"));

// Serve routes
app.use('/api/auth', auth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);


app.listen(process.env.PORT || config.port, () => {
    console.log(`Server running on port ${config.port}`)
  }
);
