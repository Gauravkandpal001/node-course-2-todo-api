const MongoClient=require('mongodb').MongoClient;
//to connect ot database
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to MongoDB Server');
  db.collection('Todos').find().toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });


  db.collection('Todos').find().count().then((count)=>{
    console.log('TODOS COUNT:'+count);
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });

  db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  });
  db.close();
});
