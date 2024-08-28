"use strict";
const express = require("express");

const router = require("express").Router();

const comment = require("../controllers/comment.js");

// URL: /api/comments
router.route("/").get(comment.list);

router.route("/create").post(comment.create);

router.route("/:id").put(comment.update).delete(comment.delete);

router.route("/post/:id").get(comment.read);

module.exports = router;
