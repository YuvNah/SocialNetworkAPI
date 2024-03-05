const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoguhtRoutes");

router.use("/users", userRoutes);
router.use("/thoughtd", thoughtRoutes);

module.exports = router;
