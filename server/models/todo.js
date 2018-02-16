var mongoose=require('mongoose');

var Todo =mongoose.model('Todo',{
  text:{
    type:String,
    required:true,   //means surely user must provide value to text
    minlength:1,      //means ,inimum length of text must be 1
    trim:true         //trim the spaces if any in the value provided
  },
  completed:{
    type:Boolean,
    default:false    //default value of completed if user does not provide input
  },
  completedAt:{
    type:Number,
    default:null
  },
  _creator:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }
});


module.exports={Todo};
