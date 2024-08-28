"use strict";
const Comment = require("../models/Comment.js");

module.exports = {
  //list
  list: async (req, res) => {
    const data = await Comment.find();
    res.status(200).json({
      success: true,
      data: data,
    });
  },

  //read
  read: async (req, res) => {
    const data = await Comment.findOne({ postId: req.params.postId });

    res.status(200).json({
      success: true,
      data: data,
    });
  },
  //update
  update: async (req, res) => {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete
  delete: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //create
  create: async (req, res) => {
    const newComment = new Comment(req.body);
    try {
      const savedComment = await newComment.save();
      res.status(200).json(savedComment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
