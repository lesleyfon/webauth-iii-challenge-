const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("./../models/userModels.js");
const authorized = require("./../middleware/authorized");

router.get("/users",authorized(),  async (req, res, next) => {
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
      res.status(201).json({
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

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(404).json({
        error: "Please make sure you provide a username and password",
        username: username,
        password: password
      });
    } else {
      const user = await User.findUserByUsername(username);

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(404).json({
          error: "Incorrect Credentials"
        });
      } else {
        req.session.user = user;
        res.status(200).json({
          message: "Login Successful",
          user: user
        });
      }
    }
  } catch (error) {
    res.status(404).json({
      message: "Server Error",
      error
    });
  }
});

module.exports = router;
