import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import NewOTPModal from '../Components/NewOTPModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loggedIn,setLoggedIn]=useState();
  const closeModal = () => {
    setModalVisible(false);
  };
useEffect(()=>{
if(loggedIn){
  navigation.navigate('Home')
}
},[loggedIn])

const getValue = async () => {
  try {
    const loggedInValue = await AsyncStorage.getItem('LoggedIn');
    setLoggedIn(loggedInValue);
  } catch (error) {
    console.error( error);
  }
};
getValue()
  const Login = () => {
    setLoading(true);
    if (mobile.trim() === "") {
      setSubmitError("Mobile number cannot be empty.");
      setModalVisible(true);
      setLoading(false);
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 1435a113995b2c25c2376646e271312f1873a674"
    );

    var formdata = new FormData();
    formdata.append("MemberMobile", mobile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://stgadmin.sasone.in/api/LGCadmin/MemberLogin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.status_code === 200 &&
          result.status === "Success" &&
          result.message === "Member Not Exist"
        ) {
          setSubmitError("Please login with the registered mobile number.");
          setModalVisible(false);
        } else if (result.status_code === 200 && result.status === "Success") {
          setModalVisible(true);
        } else {
          setSubmitError("Something went wrong!!");
          setModalVisible(false);
        }
      })
      .catch((error) => {
        setSubmitError("Something went wrong!!");
        setModalVisible(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobile.trim() === "") {
      setSubmitError("Mobile number cannot be empty.");
      setModalVisible(true);
      return;
    }
    Login();
  };
  const handleMobileChange = (value) => {
    setSubmitError("")
    const cleanedMobile = value.replace(/\D/g, '').slice(0, 10);
    setMobile(cleanedMobile);
  };
 
  return (
    <View style={styles.container}>
     {modalVisible && mobile &&  <NewOTPModal
        visible={modalVisible}
        mobile={mobile}
        closeModal={closeModal}
      />}
          <View style={{marginTop:30, height:300}}>
  
        </View>
      <View style={styles.innerContainer}>
   
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/LogoIcon1.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.heading}>Member Login</Text>
        <Text style={styles.subHeading}>Golf awaits. Login now.</Text>
        <TextInput
          style={[styles.input, submitError !== '' && styles.errorInput]}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          value={mobile}
          onChangeText={handleMobileChange}
        />
        {submitError ? (
          <Text style={styles.errorText}>{submitError}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Processing...' : 'Send OTP'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34BE82',
  },
  innerContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    paddingTop: 50,
    height:'100%',
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    elevation: 5,
    // margin: 15
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,

  },
  logoContainer: {
    alignItems: 'center',

  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333333',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,   
    fontFamily: 'Roboto-Regular',
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
  },
  errorInput: {
    borderColor: '#FF4D4F',
    fontFamily: 'Roboto-Regular',
  },
  button: {
    backgroundColor: '#34BE82',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop:20,
    fontFamily: 'Roboto-Regular',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  errorText: {
    color: '#FF4D4F',

    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
});

export default Login;
