const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'crypolt',
    password: 'root',
    database: 'test',
    port: '3307'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/',(req,res) => {
    res.json('hello world');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
