const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  //   deleteCourse,
} = require("../../controllers/userControllers.js");

router.route("/").get(getUsers).post(createUser);

// userid
router.route("/:userId").get(getSingleUser).put(updateUser);

module.exports = router;
