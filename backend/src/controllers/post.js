"use strict";
const Post = require("../models/Post.js");
const bcrypt = require("bcryptjs");

module.exports = {
  //list
  list: async (req, res) => {
    const data = await Post.find();
    res.status(200).json({
      success: true,
      data: data,
    });
  },

  //read
  read: async (req, res) => {
    const data = await Post.findOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      data: data,
    });
  },
  //update
  update: async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete
  delete: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("Post has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //create
  create: async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
