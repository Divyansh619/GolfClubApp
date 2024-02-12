import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import InstaStory from "react-native-insta-story";
import TransactionCard from "../Components/TransactionCard";
import MyActivity from "../Components/HomePage/MyActivity";
import { LinearGradient } from "expo-linear-gradient";
import DashboardCard from "../Components/HomePage/DashboardCard";
import TestimonialNew from "../Components/HomePage/TestimonialNew";
import { useContext, useEffect, useState } from "react";
import NoDataFound from "../Components/NoDataFound";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../Components/Conetxt/AuthContext";


const HomeNew = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState({});
  const [loggedIn, setLoggedIn] = useState();
  const { authValue } = useContext(AuthContext);
  useEffect(() => {
    getValue()
  }, [authValue]);
  useEffect(() => {
    FetchData()
  }, []);
  const greetingMessage = () => {
    var today = new Date()
    var curHr = today.getHours()
    var message = ""
    if (curHr < 12) {
      message = 'Good Morning'
    } else if (curHr < 18) {
      message = 'Good Afternoon'
    } else {
      message = 'Good Evening'
    }
    return message
  }
  const getValue = async () => {
    setMemberData({})
    try {
      const loggedInValue = await AsyncStorage.getItem('MemberUUID');
      const loggedIn = await AsyncStorage.getItem('LoggedIn');
      setLoggedIn(loggedIn);
      FetchMemberData(loggedInValue.slice(1, -1));
    } catch (error) {
      console.error(error);
    }
  };

  const FetchMemberData = (memberID) => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      MemberUUID: memberID
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://stgadmin.sasone.in/api/LGCadmin/UserDashboard", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "Success" && result.status_code === 200) {
         
          setMemberData(result)
        }
        else {
          setData({})
        }
      })
      .catch(error => console.log('error', error)).finally(() => setLoading(false))
  }
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
    fetch("https://stgadmin.sasone.in/api/LGCfrontend/HomePage", requestOptions)
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


  const renderFacilityItem = ({ item }) => (
    <View style={styles.facilityItem}>
      <Image source={item.FacilityImageWeb} style={styles.facilityImage} />
      <LinearGradient
        colors={["red", "green"]}
        style={styles.facilityItem}
      >
        <Text style={styles.facilityName}>{item.FacilitySectionName}</Text>
      </LinearGradient>
    </View>
  );
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        {isLoading ? (
         <View style={{
          flex: 1,
          height:500,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
           <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
         </View>
        ) : <>
          {data ? <View>
            <View style={styles.welcomeMessage}>
              <Text style={styles.welcomeMessageText}>Hello {greetingMessage()}, </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.welcomeName}>{memberData.MemberDetail?.MemberName || "User"}</Text>
              </ScrollView>
            </View>
            <View style={styles.containner}>
              <Text style={{ fontSize: 20, marginTop: -8, fontFamily: 'Roboto-Bold' }}>Latest News</Text>
              <InstaStory storyContainerStyle={{ margin: 0 }} storyImageStyle={{ objectFit: 'contain' }} unPressedBorderColor={'#7DBE80'} data={data.LatestUpdatesApp} duration={10} />
            </View>
            <View style={styles.containner}>
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', marginBottom: 8, marginTop: -8 }}>My Activity</Text>
              <MyActivity FetchData={FetchData} name={memberData.MemberDetail?.MemberName} memberId={memberData.MemberDetail?.MemberID} outStandingAmount={memberData.OutstandingBill?.GrandTotal} />
            </View>
            {(loggedIn && memberData.data_transaction?.length>0) && <View style={styles.containner}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', paddingBottom: 8 }}>
                  Recent Transactions
                </Text>
                {memberData.data_transaction.length > 5 && <TouchableOpacity style={{ fontFamily: 'Roboto-Regular' }} onPress={() => navigation.navigate('Dashboard')}><Text >More Transactions    </Text></TouchableOpacity>}
              </View>
              <TransactionCard transactions={memberData.data_transaction} />
            </View>}
            {data.Facilities.length > 0 && <View style={styles.containner}>
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', paddingBottom: 8 }}>
                Facilities
              </Text>
              <View style={{ alignItems: "center" }}>
                <Carousel
                  data={data.Facilities?.filter((item) => item.FacilitySectionName !== "FoodMenu")}
                  renderItem={renderFacilityItem}
                  layout={"stack"}
                  sliderWidth={450}
                  itemWidth={300}
                  loop={true}
                  autoplay={true}
                  autoplayInterval={3000}
                />
              </View>
            </View>}
            <View style={{ backgroundColor: "#EDEDED", paddingVertical: 15 }}>
              <View style={{ width: "90%", alignSelf: "center" }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <DashboardCard loggedIn={loggedIn} page={"Dashboard"} text={'Dashboard'} Type={"AntDesign"} icon={'apps'} />
                  <DashboardCard loggedIn={loggedIn} page={"Golf booking"} text="Golf Booking" Type={"AntDesign"} icon={"golf"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <DashboardCard loggedIn={loggedIn} page={"Bills"} text={"Biils and Transaction"} Type={"AntDesign"} icon={"bank-transfer"} />
                  <DashboardCard loggedIn={loggedIn} page={"Service Request"} text={'Service Request'} Type={"AntDesign"} icon={"headphones"} />
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <DashboardCard loggedIn={loggedIn} page={"Account Recharge"} text={'Account Recharge'} Type={"AntDesign"} icon={"credit-card"} />
                  <DashboardCard loggedIn={loggedIn} page={"ManagingComitee"} text={'staff Directory'} Type={"AntDesign"} icon={"account-group"} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20, marginBottom: 10, paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>Testimonials</Text>
              <TestimonialNew data={data.testimonial} />
            </View>
          </View> : <NoDataFound />}</>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containner: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 10,
  },
  welcomeMessage: {
    padding: 10,
    paddingHorizontal: 20,
  },
  loader: {
    width: "100%",
    height: "100%"
},
  transactionBox: {
    padding: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    height: 200,
    width: "100%",
  },
  welcomeMessageText: {
    fontSize: 25,

    fontFamily: 'Roboto-Bold'
  },
  welcomeName: {
    fontSize: 20,
    color: "green",
    fontFamily: 'Roboto-Regular'
  },
  headingMain: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  balanceArea: {
    width: "100%",

    marginTop: 10,
    borderRadius: 3,
  },
  lastupdate: {
    color: "#34be82",

    fontSize: 12,
    padding: 10,
    fontStyle: "italic",
  },
  amountStatus: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    padding: 20,
    color: "white",
  },
  facilityItem: {
    position: "relative", // Ensure the container is a positioned container
    marginBottom: 10,
  },
  facilityImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  facilityName: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: 'Roboto-Regular',
    backgroundColor: "transparent", // Adjust background color for better readability
    padding: 10,
    color: "#fff", // Adjust text color
    textAlign: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default HomeNew;
