const express = require('express');
const newsRoute = require('./news.route');

const router = express.Router();

const defaultRoutes = [
    {
        path : '/news',
        route : newsRoute
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;