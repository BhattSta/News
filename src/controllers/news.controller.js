const { News } = require('../models');

const createNews = async (req, res) => {
    try {
        const news = new News(req.body);
        // console.log(req.files);
        const image = [];

        if (req.files && req.files.length > 0) {
            req.files.forEach((file) => {
                // console.log(file);
                image.push({
                    url: file.filename,
                    type: file.mimetype,
                });
            });
        }

        news.image = image;

        const createNews = await news.save();
        res.status(200).send(createNews);
    } catch (err) {
        res.status(402).send(err);
    }
};


const getNews = async (req, res) => {
    try{
        const newsData = await News.find();
        res.status(201).send(newsData);
    }catch(err){
        res.status(402).send(err);
    }
};

module.exports = {
    createNews,
    getNews,
}