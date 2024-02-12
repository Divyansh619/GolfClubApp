import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NewsSection = (props) => {
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();
    return (day <= 9 ? '0' : '') + day + '-' + monthNameLong + '-' + year;
  };
  const navigation = useNavigation();
  const handleDownloadPdf = (ImagePdfUrl) => {
    Linking.openURL(ImagePdfUrl);
  };

  const handleViewMore = () => {
    navigation.navigate("LatestUpdate")
  };

  return (
<View style={styles.container}>
<View style={styles.latestNewsBox}>
    <Text style={styles.latestNewsHeading}>Latest News</Text>
    {props.data &&
      props.data.slice(0,6).map((newsItem,index) => (
        <View key={index} style={styles.newsItem}>
          <Text style={styles.newsTitle}>{newsItem.Title}</Text>
          <Text style={styles.newsContent}>{dateHandler(newsItem.UploadedOn)}</Text>
          <TouchableOpacity onPress={() => handleDownloadPdf(newsItem.ImagePdfUrl)} style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download PDF</Text>
          </TouchableOpacity>
        </View>
      ))}
    <TouchableOpacity onPress={handleViewMore} style={styles.viewMoreLink}>
      <Text style={styles.viewMoreText}>Explore Further</Text>
    </TouchableOpacity>
  </View>
</View>
  );
};

const styles = StyleSheet.create({
    container:{
width:'100%',
padding:16,
paddingTop:6
    },
    latestNewsBox: {
    
      backgroundColor: '#F5F5F5',
      padding: 16,
      width: '100%',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E0E0E0',
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
    //   fontWeight: 'bold',
    //   color: '#555',
      
    },
    newsContent: {
      fontSize: 14,
    //   color: '#777',
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
      // alignSelf: 'end',
    },
    viewMoreText: {
      color: '#EF7167',
      fontSize: 16,
      textAlign:'right',
      fontFamily: 'Roboto-Bold',
    },
  });

export default NewsSection;
