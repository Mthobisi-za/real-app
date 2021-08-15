const {Pool} = require("pg");
var pool = new Pool({
    user: "mtho",
    password: "mthobisi",
    host: "localhost",
    port: 3009,
    database: "postgres"
});
module.exports = function sql(){
    var arg = [];
    function setData(name,surname){
            pool
            .query("INSERT INTO mydata (name, surnames)  VALUES($1, $2)", [name, surname])
            .then(res =>{})
            .catch(err =>{console.log(err)})
    }
    function deletes(){
        pool
        .query("DELETE FROM mydata")
        .then(res =>{})
        .catch(err =>{console.log(err)})
    }
    return{
        setData,
        deletes
    }
}

