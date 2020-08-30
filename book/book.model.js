let db = require("../config/db");
let { normaliseString } = require("../config/type");

function addNewBook(id,name,author,quantity,year_publish,publisher,price,description,link){
    let sql=`Insert into book values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`;
    return db.query(sql,[id,name,author,quantity,year_publish,publisher,price,description,link]).catch(function(err){
        throw err;
    })
    ;
}
//Find all book in range
function findAllBooks(page=0,size=-1,search="",search_type="name") {
    let sql= `SELECT * FROM book
              WHERE ${search_type} 
              ILIKE '%${search}%'
              ${size != -1 ? `LIMIT ${size} OFFSET ${page * size}` : ""}`;
    return db.query(sql).then(function({ rows }) {
      return rows.map(normaliseString);
    });
  }
//Find a Book by ID
function findABookbyID(id){   
    return db.query(`SELECT * FROM book WHERE id='${id}'`).then(function({ rows }) {
      return rows.map(normaliseString);
    });
}



module.exports={
    addNewBook,
    findAllBooks,
    findABookbyID
}