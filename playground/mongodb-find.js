const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Users').find({
  //   _id: new ObjectID('59f81c3c3d62b2197c680805')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });
  db.collection('Users').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  //  console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos", err);
  });

  //db.close();
});
