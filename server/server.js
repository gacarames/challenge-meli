const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const rootRouter = require('./src/routes/root');
const searchRouter = require('./src/routes/search');
const itemsRouter = require('./src/routes/items');
const graphqlRouter = require('./src/routes/graphql');

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api', rootRouter);
app.use('/api', searchRouter);
app.use('/api', itemsRouter);
app.use('/api', graphqlRouter);

app.use(function (req, res, next) {
    res.status(404).sendFile('./statics/404.html', { root: __dirname });
});

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
