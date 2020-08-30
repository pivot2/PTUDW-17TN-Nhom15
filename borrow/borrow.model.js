let db = require("../config/db");
let { normaliseString } = require("../config/type");

function Borrow(id,start,end,quantity){
  let sql=`Insert into borrow values ($1,$2,$3,$4)`;
  return db.query(sql,[id,start,end,quantity]).catch(function(err){
    throw {code: "CANT CREATE", message: err.message}
})
}

//function GetAllBorrow()

module.exports={
    Borrow
}