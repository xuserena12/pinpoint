const express = require('express');
require('dotenv').config();
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

app.use(express.json())
app.use('/', indexRouter);
app.use('/', userRouter);

const cors = require("cors");
app.use(cors());


//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGOURL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});
