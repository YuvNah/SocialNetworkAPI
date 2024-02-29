const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers.js");

router.route("/").get(getUsers).post(createUser);

// userid
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
