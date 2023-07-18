const fs = require("fs")
const express = require('express');
const mysql = require('mysql2');
// modules I'm using, express application stored in a app variable, on this port
const app = express();
const port = 5000;
app.use(express.json());
// middleware allows request, HTTP methods and etc
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// creating connection to database
// The name of the database in the connection is ecommerce
// You can reference tables in any database that the MySQL user has access to.


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerce'
});
connection.connect((err) => {
    if(err) {
        console.log(`cannot connect`);
        console.log(err.errno);
        return;
    }
    console.log(`connection worked`)
})
// The app.get method defines a route for handling GET requests to the /shop endpoint.
//  When a request is made to this endpoint, the code executes a SQL query to select all records from the ecommercev2 table in the database.
app.get('/shop', (req,res) => {
    const query = 'SELECT * FROM ecommercev2';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Internal Servor Error');
        } else {
            res.status(200).json(results);
        }
    });
});

// 5000/shop shows all json data

app.listen(port, () => {  // starts server on port.
    console.log(`console listening on ${port}`);
});