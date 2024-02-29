const { User } = require("../models");

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      //   .populate("students");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a user (1)
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      // .populate(`thoguhts`)

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
        res.status(404).jason({ message: "No user with this ID!" });
      }
      res.jason(user);
    } catch (err) {
      res.status(500).jason(err);
    }
  },
};
