import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeDashboard from "../Components/DashboardPages/HomeDashboard";
import GolfBooking from "../Components/DashboardPages/GolfBooking";
import BillandTransaction from "../Components/DashboardPages/BillandTransaction";
import StayTuned from "../Components/DashboardPages/StayTuned";
import ContactUs from "./ContactUs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

const ServiceRequest = () => {
  const [activeTab, setActiveTab] = useState(4);
  const [activeClick, setactiveClick] = useState("Dashboard");
  const [data, setData] = useState({});
  const [outStandingData, setOutStandingData] = useState([]);
  const [paidBills, setPaidBills] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getValue()
    }, [])
    const getValue = async () => {
      try {
        const loggedInValue = await AsyncStorage.getItem('MemberUUID');
        FetchData(loggedInValue.slice(1,-1));
        FetchTransactions(loggedInValue.slice(1,-1));
        FetchOutStandingBills(loggedInValue.slice(1,-1));
        FetchPaidBills(loggedInValue.slice(1,-1));
      } catch (error) {
        console.error( error);
      }
    };

    const FetchData = (memberID) => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            MemberUUID:memberID
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
                    setData(result)
                }
                else {
                    setData({})
                }
            })
            .catch(error => console.log('error', error)).finally(() => setLoading(false))
    }
    const FetchPaidBills = (memberID) => {
      setLoading(true)
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
          MemberUUID:memberID
      });
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };
      fetch("https://stgadmin.sasone.in/api/LGCadmin/GetMemberPaidBills", requestOptions)
          .then(response => response.json())
          .then(result => {
     
              if (result.status === "Success" && result.status_code === 200) {
                  setPaidBills(result.data)
              }
              else {
                  setData("")
              }
          })
          .catch(error => console.log('error', error)).finally(() => setLoading(false))
  }
  const FetchTransactions = (memberID) => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        MemberUUID:memberID
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://stgadmin.sasone.in/api/LGCadmin/GetMemberTransactions", requestOptions)
        .then(response => response.json())
        .then(result => {
   
            if (result.status === "Success" && result.status_code === 200) {
                setTransactions(result.data)
            }
            else {
                setData("")
            }
        })
        .catch(error => console.log('error', error)).finally(() => setLoading(false))
}
const FetchOutStandingBills = (memberID) => {
  setLoading(true)
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
      MemberUUID:memberID
  });
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
  fetch("https://stgadmin.sasone.in/api/LGCadmin/GetOutstandingBillsDetails", requestOptions)
      .then(response => response.json())
      .then(result => {
          if (result.status === "Success" && result.status_code === 200) {
            
              setOutStandingData(result.data)
          }
          else {
              setData("")
          }
      })
      .catch(error => console.log('error', error)).finally(() => setLoading(false))
}
  const scrollData = [
    { name: "Dashboard" },
    { name: "Golf booking" },
    { name: "Bills" },
    { name: "Account Recharge" },
    { name: "Service Request" },
  ];

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {scrollData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleTabPress(index);
                setactiveClick(item.name);
              }}
              style={[
                styles.tab,
                activeTab === index ? styles.activeTab : null,
                index === 0 ? styles.firstTab : null,
                index === scrollData.length - 1 ? styles.lastTab : null,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === index ? styles.activeTabText : null,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

        <ContactUs />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#DDD',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#34BE82",
  },
  firstTab: {
    marginLeft: 12,
  },
  lastTab: {
    marginRight: 12,
  },
  tabText: {
    color: "#333",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
  },
});

export default ServiceRequest;
