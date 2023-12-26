const Destination = require("../models/destination");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

exports.destination_list = asyncHandler(async (req, res, next) => {
  // const allDestinations = await Destination.find({}, "country")
  //   .sort({ country: 1 })
  //   .exec();
  res.json({ success: true });
});

// Display detail page for a specific Author.
exports.destination_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Destination detail: ${req.params.id}`);
});

// Display Author create form on GET.
exports.destination_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination create GET");
});

// Handle Author create on POST.
exports.destination_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination create POST");
});

// Display Author delete form on GET.
exports.destination_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination delete GET");
});

// Handle Author delete on POST.
exports.destination_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination delete POST");
});

// Display Author update form on GET.
exports.destination_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination update GET");
});

// Handle Author update on POST.
exports.destination_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Destination update POST");
});
