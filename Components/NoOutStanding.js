import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the MaterialCommunityIcons

const NoOutStanding = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="credit-card-check" size={50} color="#34be82" />
        </View>
        {/* <Text style={styles.title}>Stay Tuned</Text> */}
        <Text style={styles.subtitle}>
       <Text style={{ color: '#34be82',fontFamily:"Roboto-Regular", }}>{" All dues settled! "}</Text> 
        </Text>
        <Text style={styles.message}>
       No outstanding amount remains.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:150,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F0F0F0', 
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',  
    // borderRadius: 10,
    padding: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily:"Roboto-Bold",
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom:10,
    fontFamily:"Roboto-Regular",
    color: '#666',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:"Roboto-Regular",
    color: '#555',
  },
});

export default NoOutStanding;
