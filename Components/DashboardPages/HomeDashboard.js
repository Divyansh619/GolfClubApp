import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import DashboardTransactionCard from '../DashboardTransactionCard';

const HomeDashboard = (props) => {
  const memberdetail=props.data?.MemberDetail
  const OutstandingBill=props.data?.OutstandingBill
  const data_transaction=props.data?.data_transaction


const greetingMessage=()=>{
  var today = new Date()
  var curHr = today.getHours()
  var message=""
  if (curHr < 12) {
    message='Good Morning'
  } else if (curHr < 18) {
    message='Good Afternoon'
  } else {
    message='Good Evening'
  }
  return message
}
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{greetingMessage()}, {memberdetail?.MemberName}</Text>
        <Text style={styles.subHeaderTextOne}>Welcome to your Golf Dashboard!</Text>
        <Text style={styles.subHeaderTextOne}>
          Here, you can view your outstanding amount, recent transactions, and bills.
        </Text>
      </View>

      {/* Balance Card */}
      <View style={styles.card}>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceText}>
            <Text style={styles.balanceTitle}>Balance Available</Text>
           <Text style={styles.balanceAmount}> {(!OutstandingBill?.GrandTotal) ? "₹0" : <> {OutstandingBill?.GrandTotal.charAt(0)==="-"?"-":""} ₹{OutstandingBill?.GrandTotal.charAt(0)==="-"?OutstandingBill?.GrandTotal.slice(1):OutstandingBill?.GrandTotal}</>}</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/logo-1.png")}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{memberdetail?.MemberName}</Text>
          <Text style={styles.memberId}>Member ID - {memberdetail?.MemberID}</Text>
        </View>
      </View>

      {/* Table */}
    {data_transaction?.length>0?<DashboardTransactionCard data={data_transaction}/>:<></>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerTwo: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily:"Roboto-Bold",
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  subHeaderTextOne: {
    fontSize: 16,
    fontFamily:"Roboto-Regular",
    color: '#555',
  },
  card: {
    backgroundColor: '#7DBE80',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    marginBottom: 20,

  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceText: {
    flex: 1,
  },
  balanceTitle: {
    color: 'white',
    fontFamily:"Roboto-Regular",
    fontSize: 16,
  },
  balanceAmount: {
    color: 'white',
    fontFamily:"Roboto-Regular",
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
  },
  userInfo: {
    paddingTop: 15,
    fontFamily:"Roboto-Regular",
  },
  userName: {
    color: 'white',
    fontFamily:"Roboto-Regular",
    fontSize: 14,
    marginTop:10
  },
  memberId: {
    color: '#fcfbdb',
    fontSize: 14,
    fontFamily:"Roboto-Regular",
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
 
});

export default HomeDashboard;
