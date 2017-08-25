// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
// if (process.env.JAWSDB_URL){ 
//   var sequelize = new Sequelize(process.env.JAWSDB_URL);
// }
// else { 
  var sequelize = new Sequelize("zvrde3vvused3h14", "etxf60u6r6ysvuy6", "uq0rpc2pbqa6hrvc", {
    port: 3306,
    host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 10,
      // min: 0,
      idle: 30000
    },
    // dialectOptions: {
    //     socketPath: "/var/run/mysqld/mysqld.sock"
    // },
    define: {
        paranoid: true
    }
  });
// }

// Exports the connection for other files to use
module.exports = sequelize;

