let db = require("../config/db");
let { normaliseString } = require("../config/type");
let bcrypt = require("bcrypt");
function signUp(username,password,gmail,phone,dob,type){
    let hashPassword=bcrypt.hashSync(password,10);
    let sql=`Insert into account values (default,$1,$2,$3,$4,$5,$6)`;
    return db.query(sql,[username,hashPassword,gmail,phone,dob,type]).catch(function(err){
        throw {code: "EXISTS_USER", message: "User already exist"}
    })
    ;
}


function logIn(username,password) {
    let sql= `SELECT * FROM account
              WHERE username='${username}' `;
    return db.query(sql).then(function({ rows }) {
      if (rows.length!=1){
          throw {code: "NO_USER", message: "User does not exist"}
      }
      let user = normaliseString(rows[0]);
      if (bcrypt.compareSync(password, user.password)) {
        delete user.password;
        return user;
        } else {
        throw { http: 400, code: "WRONG_PASSWORD", message: "Wrong password" };
        }
    });
  }

function findAllAccount(){
    let sql= `SELECT * FROM account`;
    return db.query(sql).then(function({ rows }) {
      return rows.map(normaliseString);
    });
}


module.exports={
    signUp,
    logIn,
    findAllAccount
}