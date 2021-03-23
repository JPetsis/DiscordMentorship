require("dotenv").config();

/* Dependencies */
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const chalk = require("chalk");

const verifyToken = require("./middleware/verifyToken");

const app = express();
const PORT = process.env.PORT || 3001;

/* Middleware */
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

/* Routes */
app.use("/users", require("./routes/userRoutes"));
app.use("/mentors", require("./routes/mentorRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/tags", require("./routes/tagRoutes"));
app.use("/studentTags", require("./routes/studentTagRoutes"));
app.use("/mentorTags", require("./routes/mentorTagRoutes"));
app.use("/login", require("./routes/loginRoutes"));
app.use("/studentProjects", require("./routes/studentProjectRoutes"));

/* Default Routes */
app.use("/", (req, res) => res.json({ message: "Discord Mentorship API" }));

app.listen(PORT, () =>
  console.log(
    chalk.hex("#00ff00")("[HTTP]") +
      ` Discord Mentorship API listening on port ${PORT}`
  )
);
