const mysql = require("mysql");
const con = mysql.createConnection({
    host:"0.0.0.0",
    user:'root',
    password:"",
    database:"test"
})
con.connect((err)=>{
    if(err){
        console.log("error in connection");
    }
    
    
})

module.exports = con;