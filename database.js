const mysql = require('mysql2');

// Create a connection pool instead of a single connection
const pool = mysql.createPool({
    host: "4ayb4.h.filess.io",
    user: "DealWithDreams_definition",
    port: "3307",
    password: "2b79fd48ecc733b1b218b61851b97a011c57691a",
    database: "DealWithDreams_definition", // Schema name 
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your usage (10 is a typical starting point)
    queueLimit: 0
});

module.exports = pool;
