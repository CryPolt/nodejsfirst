const port = process.env.PORT || 4000
const Application = require('./framework/Application');
const userRoutes = require('./src/user-router');
const jsonParser = require('./framework/parsejson');
const parseUrl = require("./framework/parseUrl")
const mysql = require("mysql2");

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


const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:' + port));

app.addRouter(userRoutes)


