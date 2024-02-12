
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import ClubAffliationTable from '../Components/ClubAffliation/ClubAffliationTable';
import NoDataFound from '../Components/NoDataFound';
import { AntDesign } from '@expo/vector-icons';

const ClubAffliation = () => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        FetchData()
    }, [])

    const handleSearch = (text) => {
        const filtered = data.filter(item => item.ClubName.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(filtered);
        
    };
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

        fetch("http://3.111.3.33/api/LGCfrontend/AffiliatedClubsList", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "Success" && result.status_code === 200) {
                    setData(result.data)
                    setFilteredData(result.data)
                }
                else {
                    setData("")
                }
            })
            .catch(error => console.log('error', error)).finally(() => setLoading(false))
    }
    return (
        <>
            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color="#34be82" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    // value={searchQuery}
                    onChangeText={text => handleSearch(text)}
                    onSubmitEditing={handleSearch}
                />
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
            ) : <>
                {filteredData.length>0 ? <ScrollView>
                    <View style={styles.container}>

                        {filteredData?.map((item, index) => {
                            return <ClubAffliationTable data={item} />
                        })}

                    </View>
                </ScrollView> : <NoDataFound />}</>}</>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
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
    },
    loader: {
        width: "100%",
        height: "100%"
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    searchIcon: {
        position: 'absolute',
        left: 30,
        zIndex: 5,
        color: "#34be82"
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontFamily: 'Roboto-Regular',
        borderRadius: 10,
        backgroundColor: '#DBDBDB',
        paddingLeft: 40, 
    },
});

export default ClubAffliation;
