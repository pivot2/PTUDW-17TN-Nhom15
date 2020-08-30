let router = require("express").Router();
let multer  = require('multer');
let path= require('path');
let model=require("./book.model");
const { normaliseString } = require("../config/type");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
      },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() +'.jpg');
    }
  })
var upload = multer({ storage: storage });

router.post('/upload', upload.single('cover'), function (req, res, next) {
    let {book_name,quantity,author,book_id,year_publish,publisher,price,description}=req.body;
    let {filename} =req.file;
    model.addNewBook(book_id,book_name,author,quantity,year_publish,publisher,price,description,filename)
    .then(function(){
      res.redirect('/admin-page/ad-listbook');
    })
    .catch(function(err){
      console.log(err);
      res.status(400).send(JSON.stringify({
        success: 'fail',
        error:err
      }))
    });
})

router.get('/',function(req,res,next){
  let { page, size, search, search_type} = req.query;
  if (size=="") size=undefined;
  if (page=="") page=undefined;
  model.findAllBooks(page,size,search, search_type).then(function(books){
    res.send(books);
  })
  .catch(next);
})

router.get('/id/:id',function(req,res,next){
  let id=req.params.id;
  //console.log(id);
  model.findABookbyID(id).then(function(books){
    res.send(books);
  })
  .catch(next);
})




module.exports=router;
