require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */

/* Default Routes */
app.use("/", (req, res) => res.json({ message: "Discord Mentorship API" }));

app.listen(port, () => console.log(`My API listening on port ${port}!`));
