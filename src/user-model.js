const mysql = require("mysql2/promise");


const pool = mysql.createPool({
    host: 'localhost',
    user: 'crypolt',
    password: 'root',
    database: 'test',
    port: 3307,
});

async function createUserTable() {
    const connection = await
        pool.getConnection();
    try {
        // Create user table
        await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `);
        await connection.query(`
        insert into users (username, password) values ('user','pass')
    `);
        console.log('User table created successfully');
        console.log('User table add successfully');
    } catch (error) {
        console.error('Error creating user table:', error);
    } finally {
        connection.release();
    }
}

createUserTable();


//
// async function main() {
//     // create the pool
//     const pool = mysql.createPool({
//         host: 'localhost',
//         user: 'crypolt',
//         database: 'test',
//         password: 'root',
//         port: '3307'
//     });
//
//     // now get a Promise wrapped instance of that pool
//     const promisePool = pool.promise();
//
//     // query database using promises
//     const [rows, fields] = await promisePool.query('SELECT 1');
// }