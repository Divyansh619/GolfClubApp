// NoDataFound.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoDataFound = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text||"No Data Found"} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
});

export default NoDataFound;
