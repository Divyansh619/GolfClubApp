import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import TransactionDetailPage from "./TransactionDetailPage";
import OutStandingBillsDetail from "./OutStandingBillsDetail";
import NoDataFound from "../NoDataFound";
import NoOutStanding from "../NoOutStanding";

const OutStandingBills = ({data,FetchOutStandingBills}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
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
   <View>{( data.GrandTotal==="0")?<NoOutStanding />: 
     <View
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
        <OutStandingBillsDetail FetchOutStandingBills={FetchOutStandingBills} data={data} visible={modalVisible} onClose={closeModal} buttonText={"Pay Now"}/>
      )}


  <TouchableOpacity onPress={openModal}>
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
              <Text style={{ fontFamily: "Roboto-Bold" }}>{(!data.GrandTotal) ? "₹0" : <> ₹{data.GrandTotal.charAt(0)==="-"?data.GrandTotal.slice(1):data.GrandTotal}</>}</Text>
              <Text
                style={{
                  color: "gray",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                {dateHandler(data.Date)}
              </Text>
            </View>
          </View>

          <View style={{}}>
            <Text style={{ color: "#34be82", fontFamily: "Roboto-Bold" }}>
              Pay <AntDesign name="right" />{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>}</View>
  );
};
export default OutStandingBills;
