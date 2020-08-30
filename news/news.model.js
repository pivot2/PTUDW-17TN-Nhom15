let db = require("../config/db");
let { normaliseString } = require("../config/type");

function findAllNews() {
    return db.query("SELECT * FROM news").then(function({ rows }) {
      return rows.map(normaliseString);
    });
  }
module.exports={
    findAllNews
}