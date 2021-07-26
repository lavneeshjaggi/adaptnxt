import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import rootRouter from './routes/index';

const NAMESPACE = 'Server';

const app = express();

/** Parse the body of the request */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', 'GET POST PUT PATCH DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/', rootRouter);

/**Error Handling */
app.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message
    });
});

/**Create the server */
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}: ${config.server.port}`));