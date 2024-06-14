const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'javawebmedia_webci4'  // Sesuaikan dengan nama database Anda
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// Endpoint untuk mendapatkan data berita
app.get('/news', (req, res) => {
    connection.query('SELECT * FROM berita', (error, results, fields) => {
      if (error) {
        console.error('Error querying database: ' + error.stack);
        res.status(500).send('Error fetching news from database');
        return;
      }
      res.json(results);
    });
  });

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
