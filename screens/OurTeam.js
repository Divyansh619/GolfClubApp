// OurTeam.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import ProfileCard from '../Components/ProfileCard';
import NoDataFound from '../Components/NoDataFound';


const OurTeam = () => {
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

    fetch("http://3.111.3.33/api/LGCfrontend/GolfStaffList", requestOptions)
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
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
      ) : <>
        {data ? <View style={styles.container}>
          {data.map((item, index) => {
            return <ProfileCard
            page={"our-team"}
              key={index} imageSource={item.StaffImage}
              name={item.StaffName}
              designation={item.StaffPosition} />
          })}
        </View> : <NoDataFound />}</>}
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
  loader: {
    width: "100%",
    height: "100%"
  },
});

export default OurTeam;
