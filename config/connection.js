// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
var connection;

// Set up our connection information
if (process.env.JAWSDB_URL){ 
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {  
    connection = mysql.createConnection({
    port: 3306,
    host: "cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "adsojitv3rohtfjj",
    password: "pweqnpdvx60756k4",
    database: "lwqecljbx2oh1nek"
  });
}

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
