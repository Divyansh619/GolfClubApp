import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
import NoDataFound from '../Components/NoDataFound';
import FacilitiesCard from '../Components/FacilitiesCard';
const Facilities = () => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        FetchData()
    }, [])

    const FetchData = () => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "App": 1,
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://stgadmin.sasone.in/api/LGCfrontend/FacilityImagesBySectionapp", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "Success" && result.status_code === 200) {
                    setData(result.data)
                }
                else {
                    setData("")
                }
            })
            .catch(error => console.log('error', error)).finally(() => setLoading(false))
    }


    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: 'http://3.111.3.33/_next/image?url=https%3A%2F%2Fstgadmin.sasone.in%2Flucknow_golf_club%2FFacility%2FFacilitiesWeb1600x400.jpg&w=2048&q=75' }}
                style={styles.bannerImage}
            />
            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
            ) : <>
                {Object.keys(data).length > 0 ? <ScrollView >
                    <FacilitiesCard name={"Swimming Pool"} data={data.SwimmingPool} />
                    <FacilitiesCard name={"Fitness Center"} data={data.FitnessCenter} />
                    <FacilitiesCard name={"Resturant - Ground Floor"} menu={data.GroundFloorFoodMenu } data={data.GroundFloorResturant} />
                    <FacilitiesCard name={"Resturant - First Floor"} menu={data.FirstFloorFoodMenu } data={data.FirstFloorResturant } />
                    <FacilitiesCard name={"Card Room"} data={data.CardRoom} />
                    <FacilitiesCard name={"Banquet"} data={data.Banquet} />
                    <FacilitiesCard name={"Snookers & Billiards"} data={data.SnookersBilliards} />
                </ScrollView> : <NoDataFound />}</>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 14,
        paddingBottom: 10,
        width: "100%"
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#333',
        marginBottom: 8,
        borderBottomColor: "#34be82",
        borderBottomWidth: 1,
    },
    content: {
        fontSize: 16,
        marginTop: 10,
        color: '#555',
        textAlign: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: "gray"
    },
    loader: {
        width: "100%",
        height: "100%"
    },
    bannerImage: {
        width: '100%',
        height: 150,
        marginBottom: 10
    },
    headingText: {
        fontSize: 18,
        paddingHorizontal: 16,
        // fontWeight:600,
        // color:"#7DBE80"
    }
});
export default Facilities