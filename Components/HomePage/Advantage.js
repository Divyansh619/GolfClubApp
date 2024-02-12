// screens/Advantage.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const Advantage = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.advantagesBox}>
                <Text style={styles.advantagesHeading}>Our Advantages</Text>
                {props.data && props.data.map((advantage) => (
                    <View key={advantage.KeyIndex} style={styles.advantageItem}>
                        <Image
                            source={{ uri: advantage.Logo }}
                            style={styles.image}
                        />
                        <Text style={styles.advantageTitle}>{advantage.Title}</Text>
                        <Text style={styles.advantageContent}>{advantage.Description}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        paddingTop: 6
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
    advantagesHeading: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        marginBottom: 10,
        color: '#333',
    },
    advantageItem: {
        marginBottom: 15,
        alignItems: 'center',
    },
    advantageTitle: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        color: '#ef7167',
        marginTop: 8,
    },
    advantageContent: {
        fontSize: 14,
        // color: '#777',
        textAlign: 'center',
        marginTop: 5,
    },
    image: {
        height: 80,
        width: 80,

    },
});
export default Advantage;

