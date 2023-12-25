const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/destination/${this._id}`;
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
