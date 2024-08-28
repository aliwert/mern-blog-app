"use strict";
const express = require("express");

const router = require("express").Router();

const comment = require("../controllers/comment.js");
const verifyToken = require("../middlewares/verify-token.js");

// URL: /api/comments
router.route("/").get(comment.list);

router.route(verifyToken, "/create").post(comment.create);

router
  .route("/:id")
  .put(verifyToken, comment.update)
  .delete(verifyToken, comment.delete);

router.route("/post/:id").get(comment.read);

module.exports = router;
