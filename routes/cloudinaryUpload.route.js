/**
 * Title: Build cloudinary upload route
 * Description: Execute routing properties from here
 * Author: Hasibul Islam
 * Date: 30/10/2022
 */

/* external import */
const express = require("express");

/* internal import */
const uploader = require("../middlewares/cloudinaryUpload.middleware");
const cloudinaryUploadController = require("../controllers/cloudinaryUpload.controller");

/* router level connection */
const router = express.Router();

/* router level methods execution */
router.post(
  "/",
  uploader.single("image"),
  cloudinaryUploadController.cloudinaryUpload
);

module.exports = router;
