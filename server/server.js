import express from 'express';
import bodyParser from 'body-parser';

import user123Mock from '../mocks/favorites/user123';

const PORT = 8081;

const app = express();

app.use(bodyParser.json());

app.get('/favorites/user/:userId', (req, res) => {
    console.log('getting info for ', req.params.userId);
    res.json(user123Mock);
});

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}.`);
});
