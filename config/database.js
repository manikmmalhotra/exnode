const { createPool } = require("mysql");

const pool = createPool({
    port:3306,
    host:"localhost",
    user:"root",
    password: "7508723381",
    database: "testerr",
    connectionLimit: 10
    
});

module.exports = pool;