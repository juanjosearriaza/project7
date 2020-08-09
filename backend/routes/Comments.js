const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comments");

router.get("/", auth, commentCtrl.getAllComments);
router.post("/", auth, commentCtrl.createComment);


module.exports = router;
