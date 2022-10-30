/**
 * Title: Build upload controller
 * Description: Controller that control request and response throughout service
 * Author: Hasibul Islam
 * Date: 30/10/2022
 */

const cloudinaryUploadService = require("../services/cloudinaryUpload.service");

exports.cloudinaryUpload = async (req, res, next) => {
  try {
    const result = await cloudinaryUploadService.cloudinaryUpload(
      req.file.path
    );
    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Uploading complete to Cloudinary",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
