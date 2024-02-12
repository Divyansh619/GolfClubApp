import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import TransactionDetailPage from "./TransactionDetailPage";
import OutStandingBillsDetail from "./OutStandingBillsDetail";
import { StyleSheet } from "react-native";
import PaidBillsDetail from "./PaidBillsDetail";
import NoDataFound from "../NoDataFound";

const PaidBills = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [detail, setDetail] = useState([]);


  const openModal = (item) => {
    setDetail(item)
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
  return (<View>
    {data.length>0?<View
      style={{
        width: "100%",
        padding: 10,
        backgroundColor: "white",

        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        alignSelf: "center",
        borderRadius: 10,
      }}
    >
      {modalVisible && (
        <PaidBillsDetail  data={detail} visible={modalVisible} onClose={closeModal}  buttonText={"Download PDF"}/>
      )}
{  data.map((item,index)=>{
  return (
    <TouchableOpacity onPress={()=>openModal(item)}>
    <View
      style={{
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
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ paddingLeft: 6 }}>
          <Text style={{ fontFamily: "Roboto-Bold" }}>₹{item.GrandTotal}</Text>
          <Text
            style={{
              color: "gray",
              fontFamily: "Roboto-Regular",
              fontSize: 12,
            }}
          >
          {dateHandler(item.Date)} | {item.Time}
          </Text>
        </View>
      </View>

      <View style={{}}>
        <Text style={{ color: "#34be82", fontFamily: "Roboto-Bold" }}>
          View <AntDesign name="right" />
        </Text>
      </View>
    </View>
  </TouchableOpacity>
  )
})   }
    </View>:<NoDataFound/>}</View>
  );
};

export default PaidBills

const styles = StyleSheet.create({})