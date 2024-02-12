// LGCHistory.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import NoDataFound from '../Components/NoDataFound';
import RenderHtml from 'react-native-render-html';
const LGCHistory = () => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        FetchData()
    }, [])
    const source = {
        html: data?.data?.HtmlDescription
    };
    const FetchData = () => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
        myHeaders.append("Content-Type", "application/json");
        var raw = ""
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://3.111.3.33/api/LGCfrontend/AboutUsList", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "Success" && result.status_code === 200) {
                    setData(result)
                }
                else {
                    setData("")
                }
            })
            .catch(error => console.log('error', error)).finally(() => setLoading(false))
    }
    return (
        <>{isLoading ? (
            <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
        ) : <>
            {data ?
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            source={{ uri: data.data.image }}
                            style={styles.image}
                        />
                        <RenderHtml
                        style={{fontFamily: 'Roboto-Regular'}}
                            source={source}
                        />
                    </View>
                </ScrollView> : <NoDataFound />}</>}</>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 10,
        backgroundColor:"white",
        alignItems: 'center',
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
        height: 200,
        borderRadius: 10,
        marginVertical:10
    },
    loader: {
        width: "100%",
        height: "100%"
    },
});

export default LGCHistory;
