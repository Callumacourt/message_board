const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get('/', messageController.getNew);

router.get('/:messageId', messageController.getMessage);

router.post('/', messageController.postNew);

module.exports = router;