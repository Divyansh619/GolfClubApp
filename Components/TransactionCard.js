import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TransactionDetailPage from "./DashboardPages/TransactionDetailPage";
import { useState } from "react";

const TransactionCard = ({transactions}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const openModal = (item) => {
    setData(item)
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();
    return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
  };

  return (
   <View style={{
    width: "100%",
    padding: 10,
    backgroundColor: "white",
// marginBottom:10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignSelf: "center",
    borderRadius: 10,
   }}>
          {modalVisible && (
        <TransactionDetailPage data={data} visible={modalVisible} onClose={closeModal} />
      )}
   {transactions.slice(0,5).map((item,index)=>{
   return<TouchableOpacity  onPress={()=>openModal(item)}>
     <View
          style={styles.container}
        >
          <View
            style={styles.innerContainer}
          >
          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={item.TransactionType=="Credit"?"#34be82":"#FF6666"}
            style={{
              backgroundColor: item.TransactionType=="Credit"?"#C1F2B0":"#FCD2D1",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingLeft: 4 }}>
            <Text style={{ fontFamily: 'Roboto-Bold' }}> {item.TransactionType} </Text>
            <Text style={{ color: "gray", fontSize: 12,fontFamily: 'Roboto-Regular' }}> {dateHandler(item.Date)} | {item.Time}</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ color: item.TransactionType=="Credit"?"#34be82":"#FF6666", fontFamily: 'Roboto-Bold' }}> {item.TransactionType=="Credit"?"+":"-"} {item.AmountPay}</Text>
        </View>
      </View>
  
    </TouchableOpacity>
   })  }
  
   </View>
  );
};
export default TransactionCard;
const styles = StyleSheet.create({
  container:{
      marginVertical: 5,
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 10,
      justifyContent: "space-between",
      shadowColor: "#FFFFFF",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 5,
    },
    innerContainer:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }
})