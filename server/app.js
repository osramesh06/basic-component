const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoute = require("./api/routes/users");

mongoose.connect(
  `mongodb+srv://schoolSoftware:${
    process.env.MONGO_ATLAS_PASSWWORD
  }@shoolmanagement-yamhz.mongodb.net/test`,
  {
    useNewUrlParser: true
  }
);

mongoose.connection.on("error", err => {
  setTimeout(() => {
    `mongodb+srv://schoolSoftware:${
      process.env.MONGO_ATLAS_PASSWWORD
    }@shoolmanagement-yamhz.mongodb.net/test`,
      {
        useNewUrlParser: true
      };
  }, 5000);
});

// process.on('unhandledRejection', up => { throw up })

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
    return res.status(200).json({});
  }
});

app.use("/users", usersRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
