const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);

module.exports = router;
