/* external import */
const mongoose = require("mongoose");

/* create cloudinary upload schema */
const cloudinaryUploadSchema = mongoose.Schema({
  image: String,
});

/* create cloudinary upload model */
const CloudinaryUpload = mongoose.model(
  "CloudinaryUpload",
  cloudinaryUploadSchema
);

module.exports = CloudinaryUpload;
