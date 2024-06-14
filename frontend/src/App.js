import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/news')  // Ganti port sesuai dengan backend yang baru
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="App">
      <h1>Daftar Berita</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h2>{item.judul}</h2>  {/* Sesuaikan dengan field di tabel berita */}
            <p><strong>Kategori:</strong> {item.kategori}</p>  {/* Sesuaikan dengan field di tabel berita */}
            <p><strong>Ringkasan:</strong> {item.ringkasan}</p>  {/* Sesuaikan dengan field di tabel berita */}
            <p><strong>Kata Kunci:</strong> {item.keywords}</p>  {/* Sesuaikan dengan field di tabel berita */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
