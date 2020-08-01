const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/posts");

router.get("/", auth, postCtrl.getAllPost);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.post("/", auth, multer, postCtrl.createPost);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
