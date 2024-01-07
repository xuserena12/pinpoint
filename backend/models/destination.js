const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  city : {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // user_id: {
  //   type: String,
  //   required: true,
  // }
});

DestinationSchema.virtual("url").get(function () {
  return `/destination/${this._id}`;
});

// Export model
module.exports = mongoose.model("Destination", DestinationSchema);
