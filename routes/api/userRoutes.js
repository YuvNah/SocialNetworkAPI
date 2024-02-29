const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  //   updateCourse,
  //   deleteCourse,
} = require("../../controllers/userControllers.js");

router.route("/").get(getUsers).post(createUser);

// userid
router.route("/:userId").get(getSingleUser);

module.exports = router;
