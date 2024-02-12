import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const MyActivity = ({ name, memberId, outStandingAmount,FetchData }) => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [memberID, setMemberID] = useState("");
  const [loggedIn, setLoggedIn] = useState();
  const navigation = useNavigation();
  const getValue = async () => {
    try {
      const memberId = await AsyncStorage.getItem('MemberUUID');
      const loggedInValue = await AsyncStorage.getItem('LoggedIn');
      setLoggedIn(loggedInValue);
      setMemberID(memberId.slice(1, -1))
    } catch (error) {
      console.error(error);
    }
  };
  getValue()
  const payNowHandler = () => {
    if (!amount) {
      Alert.alert(
        '',
        'Please enter Amount',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    }
    else {
      paymentInsert()
    }
  }
  const handleChange = (value) => {
    const cleanedAmount = value.replace(/\D/g, '');
    setAmount(cleanedAmount);
  };
  const paymentInsert = () => {
    setLoading("insert")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "MemberUUID": memberID,
      "AmountPay": amount
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://stgadmin.sasone.in/api/LGCadmin/MemberPaymentTransaction", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "Success" && result.status_code === 200 && result.message === "Transaction Succssfully Completed") {
          setAmount('')
          FetchData()
          Alert.alert(
            '',
            'Payment Succesfull!!',
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          );
        }
        else {
          Alert.alert(
            '',
            result.message,
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          );
        }
      })
      .catch((error) => {
        Alert.alert(
          '',
          'Something went wrong.',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
      }).finally(() => {
        setLoading("")
  
       
      })
  }
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        alignSelf: "center",
      }}
    >

      <View>
        <View
          style={{
            backgroundColor: "#7DBE80",
            // marginHorizontal: 28,
            marginVertical: 10,
            padding: 20,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "#d5dbd6", fontSize: 16, fontFamily: 'Roboto-Regular' }}>
                Balance Available
              </Text>

              <Text
                style={{ color: "white", fontSize: 24, fontFamily: 'Roboto-Bold' }}
              >
                {(!outStandingAmount) ? "₹0" : <> {outStandingAmount.charAt(0)==="-"?"-":""} ₹{outStandingAmount.charAt(0)==="-"?outStandingAmount.slice(1):outStandingAmount}</>}
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/logo-1.png")}
                style={{ height: 30, width: 30, borderRadius: 5 }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "white", fontSize: 16, fontFamily: 'Roboto-Regular' }}>{name || "User"}</Text>
            <Text style={{ color: "#fcfbdb", fontSize: 14, fontFamily: 'Roboto-Regular' }}>
              Memeber Id - {memberId || "****"}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ alignItems: 'center', textAlign: 'center', paddingVertical: 4, color: '#4DA2D6', fontFamily: 'Roboto-Regular' }}>Add Money</Text>
        <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 8, justifyContent: "center" }}>

          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"black"}
            style={{
              textAlign: 'center',
              padding: 10,
              paddingVertical: 4,
              borderRadius: 10,
            }}
          />
          <TextInput
            style={{
              fontSize: 18,
              color: 'black',
              fontFamily: 'Roboto-Regular'
            }}
            keyboardType="numeric"
            value={amount}
            onChangeText={handleChange}
            placeholder="0"
          />
        </View>
        <View style={{ isplay: 'flex', flexDirection: 'row', justifyContent: "space-between", paddingVertical: 8, width: '70%', alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => setAmount("1000")} style={{ fontSize: 12, fontFamily: 'Roboto-Regular', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 50, backgroundColor: '#EDEDED' }}><Text>+1000</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setAmount("2000")} style={{ fontSize: 12, paddingHorizontal: 12, fontFamily: 'Roboto-Regular', paddingVertical: 4, borderRadius: 50, backgroundColor: '#EDEDED' }}><Text>+2000</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setAmount("5000")} style={{ fontSize: 12, paddingHorizontal: 12, paddingVertical: 4, fontFamily: 'Roboto-Regular', borderRadius: 50, backgroundColor: '#EDEDED' }}><Text>+5000</Text></TouchableOpacity>
        </View>
      </View>
      {loading ? <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#34be82',
          padding: 12,
          borderRadius: 10,
          color: '#34be82',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{

          fontSize: 16,
          // fontWeight: 'bold',
          fontFamily: 'Roboto-Bold',
          color: '#34be82',
        }}>{"Processing"}</Text>
      </TouchableOpacity> : <TouchableOpacity
        onPress={() => { loggedIn ? payNowHandler() : navigation.navigate('Login'); }}
        style={{
          borderWidth: 1,
          borderColor: '#34be82',
          padding: 12,
          borderRadius: 10,
          color: '#34be82',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{

          fontSize: 16,
          // fontWeight: 'bold',
          fontFamily: 'Roboto-Bold',
          color: '#34be82',
        }}>{"Pay now"}</Text>
      </TouchableOpacity>}
    </View>
  );
};
export default MyActivity;
