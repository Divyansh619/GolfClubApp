import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

const DashboardCard = ({text,icon,page,loggedIn}) => {
  const navigation = useNavigation();
  const clickHandler=()=>{
    if(!loggedIn){
      navigation.navigate('Login')
    }
    else{
      navigation.navigate(page)
    }
  }
  return (
    <TouchableOpacity onPress={()=>{clickHandler()}} style={styles.card}>
          <MaterialCommunityIcons
            name={icon}
            size={44}
            color={"#7DBE80"}
            style={{
                textAlign:'center',
              padding: 10,
              paddingVertical:4,
              borderRadius: 10,
            }}
          />
        
      <Text style={{ textAlign:'center',color:'#7DBE80',fontFamily: 'Roboto-Regular'}}>{ text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    flex:1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
    margin: 10,
  },
});

export default DashboardCard;
