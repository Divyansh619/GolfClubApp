import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Data = [
  {
    id: '1',
    title: 'Item 1',
    date: '2023-01-01',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
  },
  {
    id: '2',
    title: 'Item 2',
    date: '2023-02-01',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
  },
  {
    id: '3',
    title: 'Item 3',
    date: '2023-03-01',
    imageUrl: 'https://example.com/image3.jpg',
  },
  // Add more items as needed
];

const ListItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </View>
  </View>
);

const StoryCarousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  itemDate: {
    color: '#888',
  },
});

export default StoryCarousel;
