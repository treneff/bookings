const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('management');
        const guestsCollection = db.collection('guests');
        const guestsRouter = createRouter(guestsCollection);
        app.use('/api/guests', guestsRouter);
    })
    .catch(console.err);

app.listen(9000, function () {
    console.log(`listening on port ${this.address().port}`);
});
