const { User } = require("../models");
const Thought = require("../models/Thought");

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("thoughts");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user (1)
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
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update a user by id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).jason({ message: "No User with this ID!" });
      }
      res.jason(user);
    } catch (err) {
      res.status(500).jason(err);
    }
  },

  // Delete a User
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).jason({ message: "No User with that ID" });
      }
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: "User and thoughts deleted!" });
    } catch (err) {
      res.status(500).jason(err);
    }
  },

  // add friend to the friend list
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId, // The ID of the user to update
        { $addToSet: { friends: req.params.friendId } }, // Use $addToSet to avoid duplicate friend IDs
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId, // The ID of the user to update
        { $pull: { friends: req.params.friendId } }, // Use $pull to remove the friend ID from the array
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
