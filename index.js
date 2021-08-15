const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const {Pool} = require("pg");
const bodyp = require("body-parser");
app.use(express.static('public'));
////---connect to pool
const pool = require("./pool");
///-----EXPRESS SETUP
const exhbs = require("express-handlebars");
const { urlencoded } = require("express");
const fact = require("./sql-factory");
const sql = fact();
app.engine("handlebars", exhbs({defaultLayout: "main", layoutsDir: "views/layout"}))
app.set("view engine", "handlebars");

/////-----handlebars
//-----body
app.use(bodyp.urlencoded({extended: false}));
app.use(bodyp.json())
app.get('/', (req,res)=>{
    /*
        pool
            .query("SELECT * FROM mydata")
            .then(result =>{
                res.render("index", {data: result.rows});
               
            })
            .catch(err =>{
                console.log(err)
            })
*/
    (async ()=>{
        const {rows, err} = await pool.query("SELECT * FROM mydata");
                res.render("index", {data: rows})
                console.log(err)
    })();
            
        //pool.end()
});

app.get("/register", (req,res)=>{
    res.render("register");
})
app.post('/registerPeople', (req,res)=>{
    sql.setData(req.body.name, req.body.surname);
    res.redirect('/home')
})
app.get("/reset", (req,res)=>{
    sql.deletes();
    res.redirect("/home")
});
app.get("/home", (req,res)=>{
    res.redirect('/')
})
app.listen(PORT, ()=>{
    console.log("port started on " + PORT)
});
