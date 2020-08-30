let router = require("express").Router();
let model=require("./account.model");
router.post('/signup',(req,res)=>{
    let {username,password,gmail,phone,dob,type}=req.body;
    model.signUp(username,password,gmail,phone,dob,type).then(function(){
      res.status(201).send({
        register:'true'
      });
    }).catch(function(err){
      res.status(400).send(JSON.stringify({
        register: 'false',
        message: err.message
      }))
    });
  });

router.post('/login',(req,res)=>{    
    let {username,password}=req.body;
    model.logIn(username,password).then(function(user){
      res.status(200).send(user);
    })
    .catch(function(err){
      res.status(400).send(JSON.stringify({
        login: 'false',
        message: err.message
      }))
    });
  });

router.get('/',function(req,res,next){
    model.findAllAccount().then(function(accounts){
      res.send(accounts);
    })
    .catch(next);
  })

module.exports=router;