// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
if (process.env.JAWSDB_URL){ 
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else { 
  var sequelize = new Sequelize("nmtndbpd5rfkk1p2", "t5jb9lflrosd0iu3", "wili730s9yl2vl77", {
    port: 3306,
    host: "uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

// Exports the connection for other files to use
module.exports = sequelize;


// database: "nmtndbpd5rfkk1p2"
