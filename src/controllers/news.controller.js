// const { News } = require('../models');

// const createNews = async (req, res) => {
//     try{
//         const news = new News(req.body);
//         const createNews = await news.save();
//         res.status(200).send(createNews);
//     }
//     catch(err){
//         res.status(402).send(err);
//     }
// }

// module.exports = {
//     createNews,
// }

const { News } = require('../models');
const path = require('path')

// console.log(path.join(__dirname, '../public'));
var imagePath = path.join(__dirname, '../public/');
// console.log(imagePath);


const createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    // console.log(news);
    const image = [];

    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        // console.log(file);
        image.push({
          url: file.filename,
          extension: file.mimetype,
        });
      });
    }

    news.image = image;

    const createNews = await news.save();
    res.status(200).send(createNews);
  } catch (err) {
    console.log('Error :- ',err);
    res.status(402).send(err);
  }
};

module.exports = {
    createNews,
}