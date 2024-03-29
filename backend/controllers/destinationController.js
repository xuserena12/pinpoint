const Destination = require("../models/destination");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] })
});

exports.destination_list = asyncHandler(async (req, res, next) => {
  const userId = req.query.userId;
  console.log(userId);
  try {
    const allDestinations = await Destination.find({ user_id: userId }, "country city rating date").sort({ country: 1 }).exec();
    res.json(allDestinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


exports.destination_create_post = asyncHandler(async (req, res, next) => {
  try {
    const { country, city, rating, date, id } = req.body;

    console.log(id);

    const newDestination = new Destination({
      country: country,
      city: city,
      rating: rating,
      date: date,
      user_id: id,
    });

    await newDestination.save();

    res.status(201).json(newDestination);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


exports.destination_delete_post = asyncHandler(async (req, res, next) => {
  try {
    const destinationID = req.params.id;
    const destination = await Destination.findById(destinationID);

    if (!destination) {
      return res.status(500).json({ message: 'Destination not found' });
    }

    await Destination.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Destination deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not delete destination' });
  }
});


exports.destination_update_post = asyncHandler(async (req, res, next) => {

});

