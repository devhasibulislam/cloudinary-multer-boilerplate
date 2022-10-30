/**
 * Title: Build controller's service
 * Description: Service for controller's request or response
 * Author: Hasibul Islam
 * Date: 30/10/2022
 */

const CloudinaryUpload = require("../schemas/cloudinaryUpload.schema");

exports.cloudinaryUpload = async (url) => {
  const result = await CloudinaryUpload.create({ image: url });
  return result;
};
