import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.100.24:3001/news')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.judul_berita}</Text>
      <Text>Ringkasan: {item.ringkasan}</Text>
      <Text>Kategori: {item.nama_kategori}</Text>
      <Text>Keywords: {item.keywords}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Berita</Text>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.id_berita.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newsItem: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default NewsList;
