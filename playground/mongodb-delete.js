const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // //delete Many
  // db.collection('Users')
  // .deleteMany({text: 'serge'})
  // .then((result) => {
  //   console.log(result);
  // })

  // //deleteOne
  // db.collection('Users')
  // .deleteOne({name: 'serge shalo'})
  // .then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').
  findOneAndDelete({location: 'south holland'})
  .then((result) => {
    console.log(result);
  });
  //db.close();
});
