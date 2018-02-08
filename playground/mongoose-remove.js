const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/User');


 Todo.remove({}).then((result)=>{
   console.log(result);
 });

 //Todo.findOneAndRemove
 //Todo.findByIdAndRemove

 Todo.findByIdAndRemove('5a7cafce808d132b8e8cc139').then((todo)=>{
   console.log(todo);
 });
