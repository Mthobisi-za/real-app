const {Pool} = require("pg");
var data = { user: "mtho", password: "mthobisi", host: "localhost", port: 3009, database: "postgres"}
 var pool = new Pool(process.env.DATABASE_URL || data);

module.exports = pool;
