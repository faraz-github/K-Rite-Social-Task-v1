const express = require("express");
const router = express.Router();

const { uploadUserPicture } = require("../controllers/uploadController");

//----------------------------------------------------------------Upload Routes
// @desc    Upload user profile picture
// @route   POST /api/upload/user/picture
// @access  Public
router.post("/user/picture", uploadUserPicture);

module.exports = router;
