import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const NewsCard = (props) => {
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();
    return (day <= 9 ? '0' : '') + day + '-' + monthNameLong + '-' + year;
  };

  const handleDownloadPdf = (ImagePdfUrl) => {
    Linking.openURL(ImagePdfUrl);
  };
  return (
    <View style={styles.container}>
    <View style={styles.latestNewsBox}>
        {props.data.length > 0 &&
          props.data.map((newsItem,index) => (
            <TouchableOpacity key={index} onPress={() => handleDownloadPdf(newsItem.ImagePdfUrl)} style={styles.card}>
            <View style={{
              borderWidth:2,
              borderColor:"#7DBE80",
              padding:2, 
              borderRadius:50,
              marginRight: 16,
            }}><Image source={{ uri: newsItem.ImagePdfUrl }} style={styles.image} /></View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{newsItem.Title}</Text>
              <Text style={styles.designation}>{dateHandler(newsItem.UploadedOn)}</Text>
            </View>
          </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
width:'100%',
// padding:16,
// paddingTop:6
  },
  latestNewsBox: {
  
   
    paddingTop: 16,
    width: '100%',

  },
  latestNewsHeading: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginBottom: 12,
    color: '#333',
  },
  newsItem: {
      borderWidth:1,
      borderColor:"#34BE82",
      borderRadius:10, 
      padding:4,
    marginBottom: 16,
  },
  newsTitle: {
    fontSize: 18,
  },
  newsContent: {
    fontSize: 14,
  },
  downloadButton: {
    backgroundColor: '#34BE82',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
  },
  viewMoreLink: {
    marginTop: 0,
    alignSelf: 'end',
  },
  viewMoreText: {
    color: '#EF7167',
    fontSize: 16,
    textAlign:'right',
    fontFamily: 'Roboto-Bold',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    // borderLeftWidth:2,
    // borderLeftColor:"#7DBE80",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginBottom: 1,
  },
  designation: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#555',
  },

});

export default NewsCard;
