//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
//to connect ot database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');

  db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID("5a73661b10408ec5456d9e89")
  },{
    $set:{ completed:true}
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID("5a707a1ccbb93a15e8510d2d")
  },{
    $set:{ name:'Gaurav'},
    $inc:{age:1}
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });
  db.close();
});
