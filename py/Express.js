const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'chart_data';
const collectionName = 'chart_data';

const app = express();

app.get('/chart-data', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error connecting to MongoDB' });
    } else {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      collection.find().toArray(function(err, result) {
        if (err) {
          console.log(err);
          res.status(500).send({ message: 'Error fetching chart data' });
        } else {
          res.send(result);
        }
        client.close();
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

