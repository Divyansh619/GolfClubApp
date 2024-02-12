// navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import History from "../screens/History";
import ManagingComitee from "../screens/ManagingComitee";
import Secratries from "../screens/Secratries";
import Captains from "../screens/Captains";
import OurTeam from "../screens/OurTeam";
import Courserule from "../screens/CourseRule";
import DressCode from "../screens/DressCode";
import HoleIneOne from "../screens/HoleInOne";
import Membership from "../screens/Membership";
import ClubAffliation from "../screens/ClubAffliation";
import LatestUpdate from "../screens/LatestUpdate";
import ContactUs from "../screens/ContactUs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  function MyTabs() {
    return (
      <Tab.Navigator // Enable scrollable tabs
        screenOptions={{
          tabBarScrollEnabled: true, // Enable scrollable tabs
          tabBarLabelStyle: { fontSize: 14 }, // Optional: Adjust the label font size
          tabBarStyle: { width: "100%" }, // Optional: Set a custom width for the entire tab bar
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={26}
                color={color}
              />
            ),
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            headerShown: true,
            tabBarLabel: "History",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
          {/*<Stack.Screen
          name="Managing Commitee"
          component={ManagingComitee}
          options={{
            headerShown: true,
            tabBarLabel: "Managing Commitee",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />

        <Stack.Screen
          name="Secratries"
          component={Secratries}
          options={{
            headerShown: true,
            tabBarLabel: "Secratries",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="Captains"
          component={Captains}
          options={{
            headerShown: true,
            tabBarLabel: "Captains",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="OurTeam"
          component={OurTeam}
          options={{
            headerShown: true,
            tabBarLabel: "OurTeam",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
       <Stack.Screen
          name="CourseRule"
          component={Courserule}
          options={{
            headerShown: true,
            tabBarLabel: "CourseRule",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="DressCode"
          component={DressCode}
          options={{
            headerShown: true,
            tabBarLabel: "DressCode",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="HoleInOne"
          component={HoleIneOne}
          options={{
            headerShown: true,
            tabBarLabel: "HoleInOne",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        /> 
         <Stack.Screen
          name="Membership"
          component={Membership}
          options={{
            headerShown: true,
            tabBarLabel: "Membership",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        /> */}
                          <Stack.Screen
          name="ClubAffliation"
          component={ClubAffliation}
          options={{
            headerShown: true,
            tabBarLabel: "ClubAffliation",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
                                 <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerShown: true,
            tabBarLabel: "ContactUs",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
                                  <Stack.Screen
          name="LatestUpdate"
          component={LatestUpdate}
          options={{
            headerShown: true,
            tabBarLabel: "LatestUpdate",
            tabBarIcon: ({ color }) => (
              <AntDesign name="" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
