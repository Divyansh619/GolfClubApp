
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator,TextInput } from 'react-native';
import NewsCard from '../Components/LatestUpdate/NewsCard';
import NoDataFound from '../Components/NoDataFound';
import { AntDesign } from '@expo/vector-icons';
const LatestUpdate = () => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        FetchData()
    }, [])
    const handleSearch = () => {
        const filtered = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredData(filtered);
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

        fetch("http://3.111.3.33/api/LGCfrontend/LatestUpdatesList", requestOptions)
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

        <View>
                {/* <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color="#34be82" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                    onSubmitEditing={handleSearch}
                />
            </View> */}
          {isLoading ? (
            <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
        ) : <>
            {data ? 
            <ScrollView>
                <View style={styles.container}>
                    <NewsCard data={data} />
                </View>
            </ScrollView>

                : <NoDataFound />}</>}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop:0,
        alignItems: 'center',
    },
    HeadingContainer: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#3498db",
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: 'white',
    },
    searchIcon: {
        position: 'absolute',
        left: 30,
        zIndex:5,
        color:"#34be82"
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontFamily: 'Roboto-Regular',

        borderRadius:10,
        backgroundColor:'#DBDBDB',
        // borderWidth: 1,
        paddingLeft: 40, // Adjust the paddingLeft to accommodate the icon
    },
});

export default LatestUpdate;
