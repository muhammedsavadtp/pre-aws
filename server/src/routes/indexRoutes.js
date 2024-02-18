const express = require("express");
const router = express.Router();
const indexController = require("../controller/indexController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/", indexController.home);
router.get("/alluserdata",authenticateToken,indexController.alluserdata);

module.exports = router;
