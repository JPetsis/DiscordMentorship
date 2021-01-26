require('dotenv').config();
require('./Discord_Bot').login(process.env.DISCORD_TOKEN);

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, (req, res) => console.log(chalk.hex("#ff00ff")("[HTTP]") + " Discord Express App - Ready"));

app.use("/", (req, res) => res.json("Discord Mentorship - Discord Bot"));