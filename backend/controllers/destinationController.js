const Destination = require("../models/destination");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] })
});

exports.destination_list = asyncHandler(async (req, res, next) => {
  try {
    const allDestinations = await Destination.find({}, "country city rating date").sort({ country: 1 }).exec();
    res.json(allDestinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

exports.destination_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Destination detail: ${req.params.id}`);
});

exports.destination_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination create GET");
});

exports.destination_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination create POST");
});

exports.destination_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination delete GET");
});

exports.destination_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination delete POST");
});

exports.destination_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination update GET");
});

exports.destination_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination update POST");
});
