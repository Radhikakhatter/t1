

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://radhikakhatter321:nSq8kofOTmS5V1Nl@prtgh.uja4kjw.mongodb.net/?retryWrites=true&w=majority&appName=Prtgh';
const dbName = 'chart_data';
const collectionName = 'chart_data';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const chartData = require('./chart_data.json');
    collection.insertMany(chartData, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Chart data imported successfully');
      }
      client.close();
    });
  }
});

