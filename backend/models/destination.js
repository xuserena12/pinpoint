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
<<<<<<< HEAD
  user_id: {
    type: String,
    required: true,
  }
=======
  // user_id: {
  //   type: String,
  //   required: true,
  // }
>>>>>>> 3fc42ce1a403dd2f916db1cc9020ae8403c52d77
});

DestinationSchema.virtual("url").get(function () {
  return `/destination/${this._id}`;
});

// Export model
module.exports = mongoose.model("Destination", DestinationSchema);
