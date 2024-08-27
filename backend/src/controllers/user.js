"use strict";
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

module.exports = {
  //list
  list: async (req, res) => {
    const data = await User.find();
    const { password, ...info } = data._doc;
    res.status(200).json({
      success: true,
      data: info,
    });
  },

  //read
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });

    const { password, ...info } = data._doc;

    res.status(200).json({
      success: true,
      data: info,
    });
  },
  //update
  update: async (req, res) => {
    try {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hashSync(req.body.password, salt);
      }
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
