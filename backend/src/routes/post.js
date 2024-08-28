"use strict";
const express = require("express");

const router = require("express").Router();

const post = require("../controllers/post.js");
const verifyToken = require("../middlewares/verify-token.js");

// URL: /api/posts
router.route("/").get(post.list);

router.route(verifyToken, "/create").post(post.create);

router
  .route("/:id")
  .put(verifyToken, post.update)
  .delete(verifyToken, post.delete)
  .get(post.read);

module.exports = router;
