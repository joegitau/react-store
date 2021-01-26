import express from "express";
import User from "../models/User.js";

const router = express.Router();

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
