/* ------------------------------------------------------- */

const express = require("express");
const app = express();
require("dotenv").config();

// envVariables to process.env:
const PORT = process.env?.PORT || 5000;
const HOST = process.env?.HOST || "127.0.0.1";

//connect to the database
const { dbConnection } = require("./src/configs/dbConnection.js");
dbConnection();

// RUN SERVER:
app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`));
