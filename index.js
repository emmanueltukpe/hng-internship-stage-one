require("dotenv").config();
const cors = require("cors");
const express = require("express");
var { StatusCodes } = require("http-status-codes");

const app = express();
app.use(express.json());
app.use(cors());

const data = {
  slackUsername: "emmanuel tukpe",
  backend: false,
  age: 25,
  bio: "I love to code",
};

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json(data);
});

app.post("/", (req, res) => {
  const { operation_type, x, y } = req.body;
  var result;

  switch (operation_type.value) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
    default:
      "Please enter a valid operation: addition, subtraction, multiplication";
      result = 0;
      break;
  }

  let response = {
    slackUsername: data.slackUsername,
    "operation type": operation_type.value,
    result,
  };
  res.status(StatusCodes.OK).json(response);
});

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
