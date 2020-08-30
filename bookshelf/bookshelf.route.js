let router = require("express").Router();
let model=require("./bookshelf.model");

router.post('/add',(req,res)=>{
    let {user_id,book_id}=req.body;
    model.addToBookshelf(user_id,book_id).then(()=>{
        res.status(201).send({
            add: 'true'
          });
    })
  });
//Get user bookshelf
router.get('/:id',(req,res)=>{
 
    let id=req.params.id;
    model.getBookshelf(id).then((bookshelf)=>{
        res.status(200).send({bookshelf});
    })
    .catch(err=>{
        res.status(400).send(JSON.stringify({
            get: 'false',
            message: err.message
          }))
    })
  });

router.get('/id/:id/',(req,res)=>{
 
    let id=req.params.id;
    model.getBookshelfID(id).then((bookshelf)=>{
        res.status(200).send({bookshelf});
    })
    .catch(err=>{
        res.status(400).send(JSON.stringify({
            get: 'false',
            message: err.message
          }))
    })
  });

module.exports=router;