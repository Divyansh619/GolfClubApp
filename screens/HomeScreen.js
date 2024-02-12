// screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator 
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import NewsSection from "../Components/HomePage/NewsSection";
import Advantage from "../Components/HomePage/Advantage";
import Facilities from "../Components/HomePage/Facilities";
import Testimonials from "../Components/HomePage/Testimonials";
import NoDataFound from "../Components/NoDataFound";
import AboutGolf from "../Components/AboutGolf";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    FetchData()
  }, [])
  const content = [
    {
      id: 1,
      content: "Member Login",
      icon: "golf-course",
      bgcolor:"#ef7167"
    },
    {
      id: 2,
      content: "Memeber Payment",
      icon: "credit-card",
      bgcolor:"#34be82"
    },
  ];
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

    fetch("http://3.111.3.33/api/LGCfrontend/HomePage", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "Success" && result.status_code === 200) {
          setData(result.data)
        }
        else {
          setData("")
        }
      })
      .catch(error => console.log('error', error)).finally(()=>setLoading(false))
  }

  return (
    <>
{isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
      ) :<>
{data ?
        <ScrollView>
          {/* Banner */}
          <ImageBackground
            source={{
              uri: data.Banner[0].BannerImageMobile,
            }}
            style={styles.banner}
          >
            <Text style={styles.bannerText}>Welcome to </Text>
            <Text style={styles.bannerText}>Lucknow Golf Club</Text>
          </ImageBackground>

          {/* Main Content */}
          <View style={styles.myActivity}>
            <Text style={styles.actHeading}> My Activity</Text> 
           
             </View>







          <View style={styles.container}>
         <View style={{padding:16}}>
         <View style={styles.iconContainer}>
              {content.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.iconBox}
                  onPress={() => console.log(`Icon ${index + 1} pressed`)}
                >
                  <Icon name={item.icon} size={24} color="#34be82" />
                  <Text style={styles.iconText}>{item.content}</Text>
                </TouchableOpacity>
              ))}
            </View>
         </View>
            {/* <AboutGolf data={data.AboutUs} /> */}
            <NewsSection data={data.LatestUpdates} />
            <AboutGolf data={data.AboutUs} /> 
            <Advantage data={data.OurAdvantage} />
            <Facilities data={data.Facilities} />
          </View>
          <Testimonials  message={data.Message} data={data.testimonial} />
        </ScrollView> : <NoDataFound />}</>}</>
  ); /*  */
};

const styles = StyleSheet.create({
  banner: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  actHeading:{
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
padding:10,
    // marginTop: 8,
  
  },
  bannerText: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: "#fff",
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "flex-start",
    // padding: 16,
  },
loader:{
width:"100%",
height:"100%"
},
  welcomeBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 16,
    backgroundColor: "#ccd3de",
    padding: 16,
    width: "100%",
  },
  textContainer: {
    flex: 1, // Take up available space
    marginRight: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
  },
  clubName: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: "#34be82",
    // marginTop: 8,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  iconContainer: {
    flexDirection: "row",
    backgroundColor: "#DBDBDB",
    borderRadius: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    // borderTopWidth: 1,
    // borderTopColor: "#ccd3de"
  },
  iconBox: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // 90% opacity
    // padding: 16,
    borderRadius: 10,
    alignItems: "center",

    borderWidth: 1,
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    borderColor: "white",
  },
  iconText: {
    // marginTop: 8,
    paddingLeft: 4,
    color: "#34be82",
  },
  


});
export default HomeScreen;
