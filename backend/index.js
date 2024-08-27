"use strict";

/* ------------------------------------------------------- */

require("dotenv").config();
const express = require("express");
const app = express();
const auhtRoute = require("./src/routes/auth.js");

// envVariables to process.env:
const PORT = process.env?.PORT || 5000;
const HOST = process.env?.HOST || "127.0.0.1";

//connect to the database
const { dbConnection } = require("./src/configs/dbConnection.js");
dbConnection();

// Accept JSON:
app.use(express.json());

//MWS
app.use("/api/auth", auhtRoute);

// RUN SERVER:
app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`));
