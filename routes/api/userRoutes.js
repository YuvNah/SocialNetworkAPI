const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  removeFriend,
  addFriend,
} = require("../../controllers/userControllers.js");

router.route("/").get(getUsers).post(createUser);

// userid
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// friends/:friendId
router.route("/:userId/friends/:friendid").post(addFriend).delete(removeFriend);

module.exports = router;
