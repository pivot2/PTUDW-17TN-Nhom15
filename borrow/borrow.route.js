let router = require("express").Router();
let model=require("./borrow.model");

router.post('/add',(req,res)=>{
    let {id,start,end,quantity}=req.body;
    model.Borrow(id,start,end,quantity).then(()=>{
        res.status(201).send({
            add: 'true'
          });
    }).catch(err=>console.log(err));
  });

module.exports=router;