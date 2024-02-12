// screens/HomeScreen.js
import React from 'react';
import { View, Text,  StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

const HomeScreen = (props) => {
    // ... (existing content, news, advantages, facilities arrays)

    const ownerInfo = {
        name: props.message.Name,
        designation:props.message.Position,
        description: props.message.ManagingCommitteeMessage,
        image:props.message.Image
    };



    const renderTestimonialItem = ({ item }) => (
        <View style={styles.testimonialItem}>
            <Text style={styles.testimonialContent}>{item.Testimonial}</Text>
            <Text style={styles.testimonialAuthor}>- {item.MemberName}</Text>
        </View>
    );

    return (
        <ScrollView>
                <View>

        <View style={styles.ownerBox}>
          
            
            <Image
                source={{ uri: ownerInfo.image }}
                style={styles.ownerImage}
            />
            <Text style={styles.ownerName}>{ownerInfo.name}</Text>
            <Text style={styles.ownerDesignation}>{ownerInfo.designation}</Text>
            <Text style={styles.ownerDescription}>{ownerInfo.description}</Text>
        </View>
    </View>
            {/* Testimonials Carousel */}
            <View style={styles.testimonialsBox}>
                <Text style={styles.testimonialsHeading}>Testimonials</Text>
                <Carousel
                    data={props.data}
                    renderItem={renderTestimonialItem}
                    sliderWidth={300}
                    itemWidth={280}
                    loop={true}
                    autoplay={true}
                    autoplayInterval={3000}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ownerBox: {
        marginTop: 16,
        backgroundColor: '#ef7167',
        padding: 16,
        margin:16,
        borderRadius: 10,
        alignItems: 'center',
    },
    ownerHeading: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        marginBottom: 10,
        color: '#fff',
    },
    ownerImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#fff',
    },
    ownerName: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: '#fcfbdb',

    },
    ownerDesignation: {
        fontSize: 16,
  
        color: 'white',
        marginBottom: 5,
    },
    ownerDescription: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    testimonialsBox: {
        marginTop: 10,
        backgroundColor: '#34be82', // Light grey background
        padding: 16,
        // borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    testimonialsHeading: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        marginBottom: 10,
        color: 'white',
    },
    testimonialItem: {
        marginBottom: 15,
        alignItems: 'center',
    },
    testimonialContent: {
        fontSize: 16,
        color: '#fcfbdb',
        textAlign: 'center',
        marginBottom: 10,
    },
    testimonialAuthor: {
        fontSize: 14,
        color: 'white',
    },
});

export default HomeScreen;
