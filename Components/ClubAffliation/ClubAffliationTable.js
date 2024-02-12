import React from "react";
import { View, Text, StyleSheet, Linking,TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import icons from a suitable library

const ClubAffiliationTable = ({data}) => {
  const handleCall = () => {
    const phoneNumber = `tel:${data.ClubMobile}`;
    Linking.openURL(phoneNumber);
  };

  const handleEmail = () => {
    const email = `mailto:${data.ClubEmail}`;
    Linking.openURL(email);
  };

  const handleWebsite = () => {
    const website = data.ClubWebsite;
    Linking.openURL(website);
  };
  return (

  <View style={styles.card}>
    
    <View style={{padding:16, paddingBottom:6}}>
    <Text style={styles.cardTextName}>{data.ClubName}</Text>
    <View style={styles.row}>

    <Text style={styles.cardText}>{data.Facilities}</Text>
  </View>
    <View style={styles.row}>
<Text style={styles.rowAddress}>Address</Text>
      <Text style={styles.cardText}>{data.ClubAddress}</Text>
      
    </View>

    <View style={styles.footer}>
{data.ClubMobile &&    <TouchableOpacity style={[styles.footerItem,(!data.ClubEmail&&!data.ClubWebsite)&& styles.lastFooterItem]} onPress={handleCall}>
    <FontAwesome5 name="mobile-alt" size={20} color="gray" />
  </TouchableOpacity>}
  
{  data.ClubEmail&&  <TouchableOpacity style={[styles.footerItem,(!data.ClubWebsite)&& styles.lastFooterItem]} onPress={handleEmail}>
      <FontAwesome5 name="envelope" size={20} color="gray" />
      {/* <Text style={styles.footerText}>{"Email"}</Text> */}
    </TouchableOpacity>}
  { data.ClubWebsite&& <TouchableOpacity style={[styles.footerItem,styles.lastFooterItem]} onPress={handleWebsite}>
      <FontAwesome5 name="globe" size={20} color="gray" />
      {/* <Text style={styles.footerText}>{"Website"}</Text> */}
    </TouchableOpacity>}
  </View>
    </View>

  </View>

  );
};



const styles = StyleSheet.create({
  row: {
    paddingHorizontal:10,
  },
  rowAddress: {
    textAlign:'center',
    fontWeight:'600',
    fontFamily: 'Roboto-Regular',
    color:'#4DA2D6'

  },
 
  card: {
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 8,
    textAlign: "center",
    borderBottomLeftRadius: 0,
    width: "100%", // Ensure the card takes up the entire width
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#7DBE80",
  },
  cardTitle: {
    fontSize: 20,
    // fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardTextHeading: {
    fontSize: 16,
    
    fontWeight: "600",
    color: "#555",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: "#555",
    flex: 1,
    fontFamily: 'Roboto-Regular',
    marginBottom: 8,
    textAlign: "center", 
  },
  cardTextName: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    flex: 1,
    textAlign: "center", 
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center", // Align items in the center horizontally
    marginTop: 4,
paddingBottom:10,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8, 
    fontFamily: 'Roboto-Regular',
    borderRightWidth: 1, 
    borderRightColor: "gray",
  },
  lastFooterItem: {
    borderRightWidth: 0, 
    fontFamily: 'Roboto-Regular',
  },
});


export default ClubAffiliationTable;
