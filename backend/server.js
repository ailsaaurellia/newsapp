const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const news = [
  {
    title: 'Berita 1',
    category: 'Politik',
    summary: 'Ringkasan berita 1',
    keywords: ['politik', 'nasional'],
  },
  {
    title: 'Berita 2',
    category: 'Olahraga',
    summary: 'Ringkasan berita 2',
    keywords: ['olahraga', 'internasional'],
  },
  {
    title: 'Berita 3',
    category: 'Teknologi',
    summary: 'Ringkasan berita 3',
    keywords: ['teknologi', 'gadget'],
  },
];

app.get('/news', (req, res) => {
  res.json(news);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
