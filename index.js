var express = require('express');
var path= require('path');
var html=require('html');
var db=require('./config/db');
let bodyparser=require("body-parser");
let { normaliseString } = require("./config/type");
const { dirname } = require('path');

let port=process.env.PORT||3000;
var app=express();
app.use(express.static(__dirname));
app.use(bodyparser.json());

app.use("/api/news",require("./news/news.route"));
app.use("/api/book",require("./book/book.route"));
app.use("/api/account",require("./account/account.route"));
app.use("/api/bookshelf",require("./bookshelf/bookshelf.route"));
app.use("/api/borrow",require("./borrow/borrow.route"));

app.get('/',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/index.html'));
  });
app.get('/borrow',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/borrow.html'));
  });
app.get('/bookshelf',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/bookshelf.html'));
  });
app.get('/confirm-borrow',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/confirm-borrow.html'));
  });
app.get('/confirm-return',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/confirm-return.html'));
  });
app.get('/detail',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/detail.html'));
  });
app.get('/front-page-login',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/front-page-login.html'));
  });
app.get('/index',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/index.html'));
  });
app.get('/info',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/info.html'));
  });
app.get('/login',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/login.html'));
  });
app.get('/return',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/return.html'));
  });
app.get('/search',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/search.html'));
  });
app.get('/signup',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/signup.html'));
  });
app.get('/status',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/status.html'));
  });
app.get('/admin-page/ad-myprofile',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-myprofile.html'));
  });
app.get('/admin-page/ad-listbook',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listbook.html'));
  });
app.get('/admin-page/ad-listuser',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listuser.html'));
  });
app.get('/admin-page/ad-listuser-userprofile',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listuser-userprofile.html'));
  });
app.get('/admin-page/ad-listbook-bookdetail',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listbook-bookdetail.html'));
  });
/*app.get('/admin-page/ad-listbook-bookdetail/',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listbook-bookdetail.html'));
  });*/
app.get('/admin-page/ad-request-borrowbook',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-request-borrowbook.html'));
  });
app.get('/admin-page/ad-request-detail',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-request-detail.html'));
  });
app.get('/admin-page/ad-listpayback',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listpayback.html'));
  });
app.get('/admin-page/ad-listpayback-detail',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listpayback-detail.html'));
  });
app.get('/admin-page/ad-listbook-add',(req,res)=>
  {
    res.sendFile(path.join(__dirname,'/admin-page/ad-listbook-add.html'));
  });
var server = app.listen(port, function() {
    __dirname=path.join(__dirname,'/static-web');
    console.log('listening for requests on port 3000');
  });