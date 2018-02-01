//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
//to connect ot database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');

  //delete many
/*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    console.log(result);
});*/

  //delete One
/*db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  console.log(result);
});*/

  //find one and delete
/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});*/

db.collection('Users').deleteMany({name:'Andrew'});
db.collection('Users').findOneAndDelete({_id:new ObjectID("5a73357ece3de206a0a9dd55")
}).then((results)=>{
  console.log(JSON.stringify(results,undefined,2));
});
  db.close();
});
