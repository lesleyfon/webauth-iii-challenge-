require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");

//middleware
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "!@#$%^&*(POPPE)(*&^",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 1000,
      httpOnly: true
    }
  })
);
app.use("/api", userRoutes);

app.get("/", (req, res) =>
  res.send("Welcome to WebAuth with JWT and sessions")
);
app.listen(PORT, () =>
  console.log(`App listening to http://localhost:${PORT}`)
);
