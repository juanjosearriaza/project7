const Post = require("../models/Posts");
const fs = require("fs");
const Comment = require("../models/Comments");

exports.getAllPost = async (req, res) => {
    try {
      const posts = await Post.findAll({ order: [["createdAt", "DESC"]]});
  
      res.status(200).json(posts);
    } catch (err) {
      console.log(err);
      res.status(404).json({ err });
    }
  };

exports.getOnePost = async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id: req.params.id } });
      res.status(200).json(post);
    } catch (err) {
      console.log(err);
      res.status(404).json({ error });
    }
  };

exports.modifyPost = async (req, res) => {
  
    let post = await Post.findOne({ where: { id: req.params.id } })
    
    if(req.file) {
      const filename = post.image.split("/images/")[1];
      fs.unlink("images/" + filename, (error) => {
        if(error) {
          console.log(error)
        } else {
          console.log('successfully deleted local image');
        }
  
      });
      const url = req.protocol + "://" + req.get("host");
      post = {
        title: req.body.title,
        description: req.body.description,
        image: url + "/images/" + req.file.filename
      }
    } else {
      post = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
      }
    }
  
    try {
      const response = await Post.update( post,
        { where: { id: req.params.id } }
        
      );
      res.status(201).json({ message: "Post updated successfully!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  };


exports.createPost = async (req, res) => {
    const url = req.protocol + "://" + req.get("host"); 
  
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      image: url + "/images/" + req.file.filename,
    });
    post.userId = req.userId
  
    try {
      const response = await post.save();
      res.status(201).json({ message: "Post saved successfully!" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  };

exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id: req.params.id } });
      const filename = post.image.split("/images/")[1];
      fs.unlink("images/" + filename, () => {
        Comment.destroy({ where: { postId: req.params.id }})
        Post.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: "Post deleted successfully!" });
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({ error });
    }
  };

