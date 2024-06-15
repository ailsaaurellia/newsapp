// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/news')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Berita</h1>
      <ul>
        {news.map(item => (
          <li key={item.id_berita}>
            <h2>{item.judul_berita}</h2>
            <p>Ringkasan: {item.ringkasan}</p>
            <p>Kategori: {item.nama_kategori}</p>
            <p>Keywords: {item.keywords}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
