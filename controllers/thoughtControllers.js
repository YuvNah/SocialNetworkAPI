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
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.userId });
      // .populate(`thoughts`)

      if (!thought) {
        return res.status(404).json({ message: "No Thought with that ID" });
      }
      res.jaon(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Crete a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update a thought by ID

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).jason({ message: "No thought with this ID!" });
      }
      res.jason(thought);
    } catch (err) {
      res.status(500).jason(err);
    }
  },

  // Delete a Thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!thought) {
        res.status(404).jason({ message: "No thought with that ID" });
      }
    } catch (err) {
      res.status(500).jason(err);
    }
  },
};
