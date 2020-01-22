const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

app.get("/", (req, res) =>
  res.send("Welcome to WebAuth with JWT and sessions")
);
app.listen(PORT, () =>
  console.log(`App listening to http://localhost:${PORT}`)
);
