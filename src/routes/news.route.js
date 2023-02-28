const express = require('express');
const router = express.Router();
const { newsController } = require('../controllers');
const multer = require('multer');
const path = require('path');

var imagePath = path.join(__dirname, '../public/');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath) 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 25 * 1024 * 1024 } 
});

// router.post('/createNews', newsController.createNews);
router.post('/createNews', upload.array('image',10), newsController.createNews);
router.get('/getNews', newsController.getNews);
module.exports = router;