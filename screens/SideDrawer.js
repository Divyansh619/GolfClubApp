import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,Alert
} from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Image } from "expo-image";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthContext from "../Components/Conetxt/AuthContext";

const SideDrawer = ({ navigation }) => {
  const [loggedIn,setLoggedIn]=useState();
  const { setAuthValue } = useContext(AuthContext);
  const getValue = async () => {
    try {
      const loggedInValue = await AsyncStorage.getItem('LoggedIn');
      setLoggedIn(loggedInValue);
    } catch (error) {
      console.error( error);
    }
  };
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      navigation.closeDrawer()
      setAuthValue(false)
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
    }
  };
  const showAlert = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'OK', onPress: () => clearAsyncStorage() },
        { text: 'Cancel',  }
      ],
      { cancelable: false }
    );
  };
  getValue();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logoMenuView}
          onPress={() => navigation.closeDrawer()}
        >
          <Image
            style={{height:40,width:180, alignSelf:'center'}}
            source={require("../assets/LogoIcon.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollview}>
        <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Home"
          onPress={() => { navigation.navigate('Home') }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/Home100.svg")}
          />}
        />
        {loggedIn&&    <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label=" Member Dashboard"
          onPress={() => { navigation.navigate('Dashboard') }}
          activeTintColor={"#000000"}
          icon={() =>     <MaterialCommunityIcons  style={styles.logoMenuDashboard} name="apps" size={28} color={"#7DBE80"} />}
        />}
        <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Managing Commitee"
          onPress={() => {
            navigation.navigate("ManagingComitee");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/MngCommitee100.svg")}
          />}
        />

        <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Secratries"
          onPress={() => {
            navigation.navigate("Secratries");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/MngCommitee100.svg")}
          />}
        />
               <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Captains"
          onPress={() => {
            navigation.navigate("Captains");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/Captain.svg")}
          />}
        />
                       <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Our Team"
          onPress={() => {
            navigation.navigate("OurTeam");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/OurTeam100.svg")}
          />}
        />
                {/* <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Latest News"
          onPress={() => {
            navigation.navigate("LatestUpdate");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/LatestNews100.svg")}
          />}
        /> */}
          <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Course Rule"
          onPress={() => {
            navigation.navigate("CourseRule");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/CourseRule.svg")}
          />}
        />
            <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Dress Code"
          onPress={() => {
            navigation.navigate("DressCode");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/DressCode100.svg")}
          />}
        />
          <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Hole In One"
          onPress={() => {
            navigation.navigate("HoleInOne");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/HoleInOne100.svg")}
          />}
        />
                  <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Membership"
          onPress={() => {
            navigation.navigate("Membership");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/Membership100.svg")}
          />}
        />
                <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Club Affiliation"
          onPress={() => {
            navigation.navigate("ClubAffliation");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/ClubAffiliation.svg")}
          />}
        />
        <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Facilities"
          onPress={() => {
            navigation.navigate("facilities");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/Facilities100.svg")}
          />}
        />
         <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="History"
          onPress={() => {
            navigation.navigate("LGCHistory");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/History100.svg")}
          />}
        />
        <DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Contact Us"
          onPress={() => {
            navigation.navigate("ContactUs");
          }}
          activeTintColor={"#000000"}
          icon={() =>     <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/ContactUs.svg")}
          />}
        />

        <View style={{borderWidth:1,borderColor:'#7DBE80', marginVertical:10, marginHorizontal:20}}></View>
          { loggedIn?<DrawerItem
          style={styles.labelView}
          labelStyle={styles.labelStyle}
          label="Logout"
          onPress={() => {
            showAlert()
          }}
          activeTintColor={"#000000"}
          icon={() =>  <Image
            style={styles.logoMenu}
            source={require("../assets/SVG/Logout100.svg")}
          />
        }
        />:<DrawerItem
        style={styles.labelView}
        labelStyle={styles.labelStyle}
        label="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
        activeTintColor={"#000000"}
        icon={() =>  <Image
          style={styles.logoMenu}
          source={require("../assets/SVG/login100.svg")}
        />
      }
      />}
      </ScrollView>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo:{
   height:100,
   width:'100%'
  },
  header: {
    paddingTop: 30,
    height: 97,
    flexDirection: "row",
    // backgroundColor:"red"
  },
  logoMenuView: {
    alignSelf: "center",
    textAlign:'center',
    padding:20
  },
  logoMenu: {
    margin: 10,
    width: 24,
    height:24,
    resizeMode: "contain",
  },
  logoMenuDashboard: {
    margin: 8,
    width: 24,
    height:24,
  },
  labelView: {
    height: 38,
    // width: 300,
    // backgroundColor:'red',
    flex: 1,
    justifyContent: "center",
  },
  labelStyle: {
    color: "#000000",
    fontSize: 18,
    marginLeft:-20,
    fontFamily: 'Roboto-Regular',

  },
  scrollview: {
    width: 280
  },

});
