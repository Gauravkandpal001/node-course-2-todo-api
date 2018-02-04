var mongoose= require('mongoose');

var User =mongoose.model('User',{
  email:{
    type:String,
    required:true,   //means surely user must provide value to email
    minlength:1,      //means minimum length of text must be 1
    trim:true         //trim the spaces if any in the value provided
  }
});

module.exports={User};
