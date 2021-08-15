const {Client, Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "mthobisi",
    host: "localhost",
    database: "postgres",
    port: 3009
    
}); //"
var ex = { id: '2', name: 'mtho', surnames: 'ngubane' }
var name = "live";
var surname = "faa"
var num = 3;
//var str = "INSERT INTO mydata (id, name, surnames) VALUES($1, $2, $3)", [num,name,surname]
pool
    .query("ALTER TABLE mydata ADD name text")
    .then(result => console.log(result.rows))
    .catch(err => console.log(err))
    pool.end();