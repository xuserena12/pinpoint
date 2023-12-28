#! /usr/bin/env node

// use to populate sample data
// node populatedb [mongodb url]

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

async function destinationCreate(index, country, city, rating, date) {
  const destination = new Destination({
     country: country,
     city: city,
     rating: rating,
     date: date
  });
  await destination.save();
  destinations[index] = destination;
  console.log(`Added destination: ${country}`);
}

async function createDestinations() {
  console.log("Adding destinations");
  await Promise.all([
    destinationCreate(0, 'China', 'Shanghai', 4, new Date('2023-12-31')),
    destinationCreate(0, 'France', 'Paris', 5, new Date('2023-12-31')),
  ]);
}

