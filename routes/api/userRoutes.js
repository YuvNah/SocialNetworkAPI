const router = require("express").Router();
const {
  getUsers,
  createUser,
  //   getSingleCourse,
  //   updateCourse,
  //   deleteCourse,
} = require("../../controllers/userControllers.js");

router.route("/").get(getUsers).post(createUser);

module.exports = router;
