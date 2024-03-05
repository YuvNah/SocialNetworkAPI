const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtControllers.js");

router.route("/").get(getThoughts).post(createThought);

// userid
router
  .route("/:userId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
