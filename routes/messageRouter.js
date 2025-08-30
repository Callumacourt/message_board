const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

module.exports = router;

router.get('/', messageController.getNew)

router.post('/', messageController.postNew)