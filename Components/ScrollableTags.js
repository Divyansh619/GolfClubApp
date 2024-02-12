import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const ScrollableTags = () => {
  const tags = [
      {
        "name": "Puddings",
        
      },
      {
        "name": "Keeros Food Products",
        
      },
      {
        "name": "RICE",
        
      },
      {
        "name": "BREADS NON-VEG",
        
      },
      {
        "name": "SALAD PAPAD",
        
      },
      {
        "name": "DESSERT",
        
      },
      {
        "name": "Tea Cakes",
        
      },
      {
        "name": "AWADHI FOOD FESTIVAL MENU",
        
      },
      {
        "name": "INDIAN NON-VEG",
        
      },
      {
        "name": "BEVERAGES",
        
      },
      {
        "name": "Main Course",
        
      },
      {
        "name": "Cookies",
        
      },
      {
        "name": "Buffet",
        
      },
      {
        "name": "RAITA",
        
      },
      {
        "name": "VEG SNACKS MENU",
        
      },
      {
        "name": "Ice Cream",
        
      },
      {
        "name": "THAI FOOD FESTIVAL MENU",
        
      },
      {
        "name": "SHAKE'S",
        
      },
      {
        "name": "NON-VEG SNACKS",
        
      },
      {
        "name": "Donuts",
        
      },
      {
        "name": "Pastries",
        
      },
      {
        "name": "SOUPS",
        
      },
      {
        "name": "Cakes",
        
      },
      {
        "name": "CHINESE",
        
      },
      {
        "name": "Lohri Special Menu",
        
      },
      {
        "name": "Continetial",
        
      },
      {
        "name": "BREADS VEG",
        
      },
      {
        "name": "BREADS",
        
      }
    ]
  
  

  return (
    <View
  style={styles.scrollContainer}
    >
      {tags.map((tag, index) => (
        <View key={index} >
          <Text style={styles.tag}>{tag.name}</Text>
          {/* <Text style={styles.tag}>{tag.name}</Text>
          <Text style={styles.tag}>{tag.name}</Text> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    display:'flex',
    flexDirection:'row',
    
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  tagText: {
    color: 'black',
  },
});

export default ScrollableTags;
