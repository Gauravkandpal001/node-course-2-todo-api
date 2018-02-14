var {User}=require('./../models/user');

var authenticate=(req,res,next)=>{
  var token=req.header('x-auth');//x-auth is the header we want to fetch
//verify token and fetch the users
  User.findByToken(token).then((user)=>{
    if(!user){
      return Promise.reject();
    }

    req.user=user;
    req.token=token;
    next();
  }).catch((e)=>{
    res.status(401).send();
  });
};

module.exports={authenticate};
