"use strict";
const express = require("express");

const router = require("express").Router();

const post = require("../controllers/post.js");

// URL: /api/posts
router.route("/").get(post.list);

router.route("/create").post(post.create);

router.route("/:id").put(post.update).delete(post.delete).get(post.read);

module.exports = router;
