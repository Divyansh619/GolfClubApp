import React from 'react';
import { View, Text, ViewPropTypes, StyleSheet, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const TestimonialNew = (props) => {
    const renderTestimonialItem = ({ item,index }) => (

        <View style={styles.testimonialItem}>
      
           { item.MemberName==="Shri Madhav Chaturvedi"?
            <Image
                source={require("../../assets/MadhavChaturvedi.jpg")}
                style={styles.user}
            />:
            <Image
            source={require("../../assets/Testimonial-user.png")}
            style={styles.usericon}
        />
        }
            <Text style={styles.testimonialContent}>{item.Testimonial.replace("<p>","").replace("</p>","")}</Text>
            <Text style={styles.testimonialAuthor}>- {item.MemberName}</Text>

            <Image
                source={require("../../assets/Testimonial.png")}
                style={styles.testimonilaIcon}
            />
        </View>
    );
    return (
        <ScrollView>
            <View style={styles.testimonialsBox}>
                <Carousel
                    data={props.data}
                    renderItem={renderTestimonialItem}
                    sliderWidth={500}
                    itemWidth={250}
                    loop={true}
                    containerStyle= {ViewPropTypes}
                    autoplay={true}
                    autoplayInterval={3000}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    testimonialsBox: {
        backgroundColor: 'white', // Light grey background
     
        // marginVertical:40,
        // marginTop:20,
  
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        position:'relative'
    },
    usericon: {
        position: 'absolute', 
        top: -28, 
        zIndex: 100,
        // borderRadius:100,
        // borderWidth:2,

        // borderColor:"#7DBE80",
        height: 56,
        width: 56,
    },
    user: {
        position: 'absolute', 
        top: -28, 
        zIndex: 100,
        borderRadius:100,
        borderWidth:2,

        borderColor:"#7DBE80",
        height: 56,
        width: 56,
    },
    testimonilaIcon: {
        position: 'absolute', 
        bottom: -28, 
        zIndex: 100,
        height: 40,
   
        backgroundColor:'white',
        width: 40,
    },
    testimonialsHeading: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        marginBottom: 10,
        color: '#333',
    },
    testimonialItem: {
        marginBottom: 30,
        borderWidth:2,
        borderColor:'#7DBE80',
        padding:10,
        marginTop:30,
        alignItems: 'center',
        zIndex:10
        // position: 'relative', 
    },
    testimonialContent: {
        fontSize: 16,
        color: '#555',
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        marginTop: 24,
    },
    testimonialAuthor: {
        fontSize: 16,
        color: '#7DBE80',
        // fontWeight:'bold',
        
        fontFamily: 'Roboto-Bold',
        marginTop:4,
        marginBottom:20,
    },
});

export default TestimonialNew;
