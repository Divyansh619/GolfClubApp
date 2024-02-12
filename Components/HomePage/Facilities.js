// screens/Facilities.js
import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const Facilities = (props) => {
 
    const renderFacilityItem = ({ item }) => (
        <View style={styles.facilityItem}>
            <Image
                source={{ uri: item.FacilityImageWeb }}
                style={styles.facilityImage}
            />
            <Text style={styles.facilityName}>{item.FacilitySectionName}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
  <View style={styles.advantagesBox}> 
                <Text style={styles.carouselHeading}>Facilities</Text>
                <Carousel
                    data={props.data}
                    renderItem={renderFacilityItem}
                    sliderWidth={300}
                    itemWidth={250}
                    loop={true}
                    autoplay={true}
                    autoplayInterval={1000}
                /></View></View>
  );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        paddingVertical: 6
    },
    advantagesBox: {
        // marginTop: 18,
        backgroundColor: '#F5F5F5',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    carouselHeading: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
    },
    facilityItem: {
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
    },
    facilityImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    facilityName: {
        fontSize: 16,
        // fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        color: '#555',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
    },
});
export default Facilities;

