import express from "express";

import { generateToken } from '../utils/generateToken.js';
import { authorize } from '../middleware/authorization.js';
import User from "../models/User.js";

const router = express.Router();

// user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).send('Invalid email or password!');
  }
});

// user profile
router.get('/profile', authorize, async (req, res) => {
  try {
    // const user = req.user;
    const user = await User.findById(req.user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(401).json({
      err: error.message,
      msg: "Couldn\'t login to profile!"
    });
  }
});

// get users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      err: error.message,
      msg: "Users not found."
    });
  }
});

// get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      err: error.message,
      msg: "Users with given ID not found."
    });
  }
});

// create user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      err: error.message,
      msg: "User not created."
    });
  }
});

// update user
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      err: error.message,
      msg: "Users with given ID not updated."
    });
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      err: error.message,
      msg: "Users with given ID not deleted."
    });
  }
});

export default router;
