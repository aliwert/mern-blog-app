"use strict";
const express = require("express");

const router = require("express").Router();

const user = require("../controllers/user.js");

// URL: /api/users
router.route("/").get(user.list);

router.route("/:id").put(user.update).delete(user.delete).get(user.read);

module.exports = router;
