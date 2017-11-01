const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59f81b21ba75ab276450fca5')
  },{
    $set: {
      text: 'Im new here'
    },
    $inc: {
      age: 1
    }

  }, {
    returnOriginal: "something to do"
  }).then((result) => {
    console.log(result);
  });

});
