const { News } = require('../models');

const createNews = async (req, res) => {
    try {
        const news = new News(req.body);
        // console.log(req.files);
        const image = [];

        if (req.files && req.files.length > 0) {
            req.files.forEach((file) => {
                // console.log(file);
                // image.push({
                //     url: file.filename,
                //     type: file.mimetype,
                // });
                image.push(file.filename)
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
    try {
        const newsData = await News.find();
        res.status(200).send(newsData);
    } catch (err) {
        res.status(402).send(err);
    }
};

const deleteNews = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteNews = await News.findByIdAndDelete({ _id: id });
        if (!deleteNews) {
            res.status(404).send();
        } else {
            res.status(200).send(deleteNews);
        }
    } catch (err) {
        res.status(402).send(err);
    }
}

const updateNews = async (req, res) => {
    try {
        const id = req.params.id;
        const updateNews = await News.findByIdAndUpdate({_id : id}, req.body,{
            new : true,
        });
        res.status(200).send(updateNews);
    } catch (err) {
        res.status(402).send(err);
    }
}

module.exports = {
    createNews,
    getNews,
    deleteNews,
    updateNews
}