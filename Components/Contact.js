import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
      setTimeout(() => {
        setSubmitError("");
      }, 5000);
  }, [submitError]);
  const handleSubmit = () => {
    // Reset previous error messages
    setSubmitError("")
    setNameError("");
    setEmailError("");
    setSubjectError("");
    setPhoneError("");
    setMessageError("");

    if (!name ) {
      setNameError("Please enter name");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!subject ) {
      setSubjectError("Please enter subject");
      return;
    }
    if (!isValidPhone(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    submitContact();
  };

  const submitContact = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 1435a113995b2c25c2376646e271312f1873a674"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Name: name,
      Email: email,
      Subject: subject,
      Phone: phone,
      Message: message,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://stgadmin.sasone.in/api/LGCfrontend/ContactUsInsert",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setSubmitSuccess(true);
          setSubmitError("Thank you for contacting us!!");
          setName("");setEmail("");setSubject("");setPhone("");setMessage("")
        } else {
          setSubmitSuccess(false);
          setSubmitError("Something went wrong!!");
        }
      })
      .catch((error) => {
        setSubmitSuccess(false);
        setSubmitError("Something went wrong!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleMobileChange = (e) => {
    const inputMobile = e;
    const cleanedMobile = inputMobile?.replace(/\D/g, '').slice(0, 10);
setPhone(cleanedMobile)
  };

  const isValidPhone = (phone) => {
    // Basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Phone No.</Text>
            <Text style={styles.subText}>+91 96215 58855, +91 83030 92001</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Email</Text>
            <Text style={styles.subText}>lucknowgolf@gmail.com</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Address</Text>
            <Text style={styles.subText}>1, Kalidas Marg, Lucknow - 226001</Text>
          </View>
        </View>
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => {setName(text);setNameError("")}}
        />
        {nameError !== "" && <Text style={styles.errorText}>{nameError}</Text>}

        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {setEmail(text);setEmailError("")}}
          keyboardType="email-address"
        />
        {emailError !== "" && <Text style={styles.errorText}>{emailError}</Text>}

        <Text style={styles.label}>Subject *</Text>
        <TextInput
          style={styles.input}
          value={subject}
          onChangeText={(text) => {setSubject(text);setSubjectError("")}}
        />
        {subjectError !== "" && <Text style={styles.errorText}>{subjectError}</Text>}

        <Text style={styles.label}>Phone *</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={handleMobileChange}
          keyboardType="phone-pad"
        />
        {phoneError !== "" && <Text style={styles.errorText}>{phoneError}</Text>}

        <Text style={styles.label}>Message </Text>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
        />


        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>{loading?"Processing": 'Submit'}</Text>
        </TouchableOpacity>

        {submitError !== "" &&<View style={submitSuccess? styles.successMessage:styles.failedMessage}>
<Text style={submitSuccess? {color:'#34be82'}: {color:'red'}}>{submitError}</Text>
<TouchableOpacity onPress={()=>{setSubmitError("");setSubmitSuccess(false)}} style={{}}>
                        <Ionicons name="close" size={16} color={submitSuccess?"#34be82":'red'} />
                    </TouchableOpacity>
</View>}

      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  successMessage:{
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    borderLeftWidth:4,
    backgroundColor:'white',
    color:"#34be82",
    borderLeftColor: "#34be82",
borderRadius:8,
    paddingHorizontal:10,
    position:'absolute',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    top:20,
    left:'5%',
    right:'5%',
    paddingVertical:10,

  },
  failedMessage:{
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    borderLeftWidth:4,
    backgroundColor:'white',
    color:"#34be82",
    borderLeftColor: "red",
borderRadius:8,
    paddingHorizontal:10,
    position:'absolute',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    top:20,
    left:'5%',
    right:'5%',
    paddingVertical:10,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
    fontFamily: 'Roboto-Regular',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  submitButton: {
    backgroundColor: "#34be82",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 6,
    marginTop:-10,
    fontFamily: "Roboto-Regular",
  },
    heading: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    borderBottomWidth: 1,
    borderBottomColor: "#3498db",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#7DBE80",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },

  section: {
    marginBottom: 8,
  },
  subText:{
    color:'white',
    fontFamily: 'Roboto-Regular'
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 0,
    color: "white",
  },
});

export default Contact;
