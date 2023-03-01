const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    source: {
        type: String,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: Array,
    },
    // image: {
    //     type: String,
    // },
},
    {
        timestamps: true,
    }
);

const News = new mongoose.model('new', newsSchema);
module.exports = News;