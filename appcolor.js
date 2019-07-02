const chalk = require('chalk')
var mysql = require('mysql');
console.log(chalk.green('Kanika is Pglet'))


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "itxchg"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM meta_skills", function (err, result, fields) {
        if (err) throw err;
        var objs = [];
for (var i = 0;i < result.length; i++) {
    objs.push({name: result[i].name});
}
        console.log((JSON.stringify(objs)));
      });
    console.log("Connected!");
  });