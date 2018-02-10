const mongoose= require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');
const _=require('lodash');

var UserSchema =new mongoose.Schema({
  email:{
    type:String,
    required:true,   //means surely user must provide value to email
    minlength:1,      //means minimum length of text must be 1
    trim:true, //trim the spaces if any in the value provided
    unique:true,
      validate:{
        validator:validator.isEmail,
        message:'{VALUE} is not a valid email'
      }
      //usePushEach: true
  },
  password:{
    type:String,
    require:true,
    minlength:6
    //usePushEach: true
  },
  tokens:[{
    access:{
      type:String,
      required:true
      //usePushEach: true
    },
    token:{
      type:String,
      required:true
      //usePushEach: true
    }
  }]
},{usePushEach: true });

UserSchema.methods.toJSON= function(){
  var user=this;
  var userObject=user.toObject();

  return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken=function(){
  var user=this;
  var access='auth';
  var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

  $push:{tokens:{access,token}};
  //user.tokens.push({access,token});
  //success callback function//
   return user.save().then(()=>{
    return token;
  });
};
var User =mongoose.model('User',UserSchema);

module.exports={User}
