"use strict";
const express = require("express");

const router = require("express").Router();

const user = require("../controllers/user.js");

router.route("/").get(user.list);

router.route("/:id").put(user.update).delete(user.delete);

module.exports = router;
