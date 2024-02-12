// Membership.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from 'expo-image';
import { ActivityIndicator } from "react-native";
import NoDataFound from "../Components/NoDataFound";

const Membership = () => {
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

    fetch("http://3.111.3.33/api/LGCfrontend/MembershipList", requestOptions)
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
        {data ? <View style={{ flex: 1 }}>
      <Image
        source={{ uri:data.Banner.BannerImageMobile }}
        style={styles.bannerImage}
      />
      <ScrollView>
        <View style={styles.container}>
        {/* <Text style={styles.headingText}>Members</Text> */}
          <View style={styles.listContainer}>
            {data.data.map((newsItem, index) => (
              <View key={index} style={styles.newsItem}>
                <Text style={styles.newsTitle}>{newsItem.Title} </Text>
                <Text style={styles.newsContent}>{newsItem.Description}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>: <NoDataFound />}</>}</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom:16
    // alignItems: "center",
  },
  bannerImage: {
    width: '100%',
    height: 150,
    marginBottom: 10
  },
  headingText:{
    fontSize:18,
    // paddingHorizontal:16,
    paddingBottom:8,
    // fontWeight:600,
    color:"#7DBE80"
},
  listContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    borderBottomWidth: 1,
    borderBottomColor: "#3498db",
    marginBottom: 20,
  },
  latestNewsBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  latestNewsHeading: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    marginBottom: 10,
    
    color: "#333",
  },
  newsItem: {
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    
    borderStyle:'dotted',
    borderBottomColor: '#AAD9BB',
  },
  newsTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  newsContent: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Roboto-Regular',
  },
});
export default Membership;
