#! /usr/bin/env node

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Destination = require("./models/destination");

const destinations = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createDestinations();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function destinationCreate(index, country) {
  const destination = new Destination({ country: country });
  await destination.save();
  destinations[index] = destination;
  console.log(`Added destination: ${country}`);
}

async function createDestinations() {
  console.log("Adding destinations");
  await Promise.all([
    destinationCreate(0, "Paris"),
    destinationCreate(1, "Waterloo"),
    destinationCreate(2, "Shanghai"),
  ]);
}


