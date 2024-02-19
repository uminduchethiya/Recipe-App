const express = require("express");
const router = express.Router();
const user = require("../model/auth");
const authController = require("../controllers/auth-controller");

router.get("/", authController.getAllUser);
router.post("/", authController.addUser);
router.post("/login", authController.login); 



module.exports = router;
