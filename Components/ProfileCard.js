import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileCard = ({ imageSource, name, designation,page}) => {
  return (
    <View style={styles.card}>

      
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.designation}>{designation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    borderLeftWidth:2,
    borderLeftColor:"#7DBE80",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    // fontWeight: '600',
    // color:"#34be82",
    fontFamily: 'Roboto-Regular',
    marginBottom: 1,
  },
  designation: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#555',
  },
});

export default ProfileCard;
