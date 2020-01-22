const express = require("express");
const router = express.Router();
const User = require("./../models/userModels.js");

router.get("/users", async (req, res, next) => {
  res.json({
    users: await User.getUsers()
  });
});

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(404).json({
        error: "Please make sure you provide a username and password",
        username: username,
        password: password
      });
    } else {
      res.status(200).json({
        message: "Successfully added a new user",
        user: await User.addUser({ username, password })
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error
    });
  }
});

module.exports = router;
