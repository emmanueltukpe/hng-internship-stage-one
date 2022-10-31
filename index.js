require('dotenv').config();
const cors = require('cors')
const express = require('express')
var { StatusCodes } = require('http-status-codes')

const app = express();
app.use(express.json());
app.use(cors())

const data = { "slackUsername": "emmanuel tukpe", "backend": false, "age": 25, "bio": "I love to code" }

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json( data );
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