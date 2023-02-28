const app = require('./app');
require('./src/config/mongodb.config');
const newsRouter = require('./src/routes/index');

const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.send('Welcome To Home Page');
});

app.get('*', (req, res) => {
    res.send('Page Not Found');
});

app.listen(port, () => {
    console.log(`Running On Port ${port}`);
});