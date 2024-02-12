// NoDataFound.js
import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';

const AboutGolf = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>About Golf Club</Text>
      {/* <Text
  style={styles.additionalContent}
  dangerouslySetInnerHTML={{
    __html: props.data.Description.split('\n')[0] + props.data.Description.split('\n')[1],
  }}
/> */}
    {/* <Image
        source={{ uri:props.data.image}}
        style={styles.image}
      /> */}
<Text>{props.data.Description.split('\n')[0] + props.data.Description.split('\n')[1]}</Text>
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
    paddingTop:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#333',
    marginBottom:8,
    borderBottomColor: "#34be82",
    borderBottomWidth: 1,
  },
    additionalContent: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    color: "#555",
  },
  image: {
    margin:16,
    width: screenWidth, // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },

});

export default AboutGolf;
