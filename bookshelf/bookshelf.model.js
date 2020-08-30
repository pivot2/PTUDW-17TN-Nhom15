let db = require("../config/db");
let { normaliseString } = require("../config/type");

function addToBookshelf(user_id,book_id,status="Not borrow"){
  let sql=`Insert into bookshelves values (default,$1,$2,$3)`;
  return db.query(sql,[user_id,book_id,status]).catch(function(err){
    throw {code: "EXISTS_USER", message: "User already exist"}
})
}
//Get bookshelf of user
function getBookshelf(user_id){
  let sql=`Select * from bookshelves 
           where id_user='${user_id}' 
  `;
  return db.query(sql).then(function({ rows }) {
    return rows.map(normaliseString);
  });
}

//


function getBookshelfID(id){
  let sql=`Select * from bookshelves 
      where id='${id}' 
    `;
    return db.query(sql).then(function({ rows }) {
    return rows.map(normaliseString);
    });
}



module.exports={
    addToBookshelf,
    getBookshelf,
    getBookshelfID
}