"use strict";
const express = require("express");

const router = require("express").Router();

const user = require("../controllers/user.js");

router.route("/:id").put(user.update);

module.exports = router;
