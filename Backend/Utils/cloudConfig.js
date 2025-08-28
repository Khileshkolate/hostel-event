const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
console.log("Cloudinary Configured: ", cloudinary.config);

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Hostel_Events',
        allowedformats: ["png", "jpg", "jpeg"],
    },
});

module.exports = {storage, cloudinary};