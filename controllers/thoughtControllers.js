const { Thought } = require("../models");
const User = require("../models/User");

module.exports = {
  // Get all Thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      //   .populate("students");
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      // .populate(`thoughts`)

      if (!user) {
        return res.status(404).json({ message: "No User with that ID" });
      }
      res.jaon(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Crete a User
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
