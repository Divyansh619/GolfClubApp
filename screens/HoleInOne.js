// HoleIneOne.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import HoleInOneTable from '../Components/HoleInOneComp/HoleInOneTable';
import NoDataFound from '../Components/NoDataFound';
import { ActivityIndicator } from 'react-native';


const HoleIneOne = () => {
    const [data, setData] = useState();
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
        fetch("https://stgadmin.sasone.in/api/LGCfrontend/HoleInOneList", requestOptions)
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
        <ScrollView>
            <View style={styles.container}>


                {isLoading ? (
                    <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
                ) : <>
                    {data ? <HoleInOneTable data={data} /> : <NoDataFound />}</>}

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        borderBottomWidth: 1,
        borderBottomColor: "#3498db",
        marginBottom: 10,
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
        height: 200,
        // borderRadius: 100,
    },
});

export default HoleIneOne;
