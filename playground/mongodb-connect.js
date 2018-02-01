const MongoClient=require('mongodb').MongoClient;
//to connect ot database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');
/*
db.collection('Todos').insertOne({
  text:'Something to do',
  completed:false
},(err,result)=>{
  if(err){
    return console.log('Unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));  //ops attribute stores all of the docs that was inserted
});
*/
db.collection('Users').insertOne({
  name:'Gaurav',
  age:22,
  location:'NIT SILCHAR'
},(err,result)=>{
  if(err){
    return console.log('Unable to insert user',err);
  }
  console.log(result.ops);   //ops attribute stores all of the docs that was inserted
});

  db.close();
});
