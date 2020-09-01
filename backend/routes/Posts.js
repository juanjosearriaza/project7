const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/posts");

router.get("/", auth, postCtrl.getAllPost);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.put("/:id/view-post", auth, postCtrl.viewPost);
router.put("/:id/userLiked", auth, postCtrl.userLiked);
router.put("/:id/userDisliked", auth, postCtrl.userDisliked);
router.post("/", auth, multer, postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;
