const express = require('express');
const app = express();
const indexRouter = require('./routes/index');


app.use('/', indexRouter);


// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://xuserena12:DyUtGm7fS4fLMcl7@cluster0.aonka4h.mongodb.net/travel_destinations?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// client runs on port 3000, server runs on port 3001
app.listen(3001, () => {
  console.log("Server started on port 3001!")
});
