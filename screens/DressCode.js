// DressCode.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NoDataFound from '../Components/NoDataFound';
import { ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
const DressCode = () => {
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

        var raw = ""

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://stgadmin.sasone.in/api/LGCfrontend/DressCodeList", requestOptions)
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
        <ScrollView>
            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
            ) : <>
                {data?.data ? <View style={styles.container}>

                    <Image
                        source={{ uri: data.Banner.BannerImageMobile }}
                        style={styles.bannerImage}
                    />
                    {/* Table Body */}
                    <View style={styles.listContainer}>
                        {data?.data.map((newsItem, index) => (
                            <View key={index} style={newsItem.Title.includes("Not Allowed") ? styles.newsItemNotAllowed
                                : newsItem.Title.includes("Recommended") ? styles.recommended : styles.newsItemAllowed}>
                                {newsItem.DressCodeIcon && <Image

                                    source={{ uri: newsItem.DressCodeIcon }}
                                    style={{ height: 40, width: 40, marginRight: 10 }}
                                />}
                                <View style={{ flex: 1 }}>
                                    <Text style={newsItem.Title.includes("Recommended") ? styles.newsTitleRecommended : styles.newsTitle}>{newsItem.Title}</Text>
                                    <Text style={newsItem.Title.includes("Recommended") ? styles.newsContentRecommended : styles.newsContent}>{newsItem.Description}</Text>
                                </View>

                                {newsItem.DressCodeImage && <Image
                                    source={{ uri: newsItem.DressCodeImage }}
                                    style={{ height: 80, width: 60, marginLeft: 10 }}
                                />}
                            </View>

                        ))}
                    </View>
                </View> : <NoDataFound />}</>}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,

        alignItems: 'center',
    },
    bannerImage: {
        width: '100%',
        height: 150,
        // marginBottom: 10
    },
    listContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        fontFamily: 'Roboto-Regular',
        padding: 16,
        width: "100%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },



    loader: {
        width: "100%",
        height: "100%"
    },
    newsItemAllowed: {
        marginBottom: 10,
        borderRadius: 12,
        padding: 8,
        fontFamily: 'Roboto-Regular',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        borderStyle: "dotted",
        backgroundColor: '#34BE82'
    },
    recommended: {
        marginBottom: 10,
        padding: 12,
        fontSize:18,
        fontFamily: 'Roboto-Regular',
        paddingBottom:0,
        paddingTop: 0

    },
    newsItemNotAllowed: {
        marginBottom: 10,
        borderRadius: 12,
        padding: 12,
        fontFamily: 'Roboto-Regular',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        borderStyle: "dotted",
        backgroundColor: '#EF7167'
    },
    newsTitle: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto-Regular',
    },
    newsContent: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Roboto-Regular',
    },
    newsTitleRecommended: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center'
    },
    newsContentRecommended: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        color: '#555',
    },
});
export default DressCode;
