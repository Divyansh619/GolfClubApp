import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Alert } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OutStandingBillsDetail = ({ visible, onClose,buttonText,data,FetchOutStandingBills }) => {
    const [loading, setLoading] = useState(false);
    const navigation=useNavigation()
    const paymentInsert = () => {
        setLoading("insert")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "MemberUUID": data.MemberUUID,
          "AmountPay": data.GrandTotal.charAt(0)==="-"?data.GrandTotal.slice(1):data.GrandTotal
        });
        console.log(raw);
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
              
                Alert.alert(
                '',
                'Payment Succesfull!!',
                [
                  { text: 'OK' },
                ],
                { cancelable: false }
              );
              FetchOutStandingBills()
            //   navigation.navigate("Home")
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

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >

            <TouchableOpacity
                activeOpacity={1}
                style={styles.modalContainer}
                onPress={onClose}
            >
                <TouchableOpacity activeOpacity={1} style={styles.modalContent}>


                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <Ionicons name="close" size={20}  />
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <View style={styles.pdf}>
                            {/* <View style={styles.pdfContent}>
                                <Text style={styles.pdfText}>Download PDF</Text>
                                <FontAwesome name="file-pdf-o" size={20} color="red" />
                            </View> */}
                        </View>
                        <View style={styles.details}>
                            {/* <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Bill No :</Text>
                                <Text style={styles.detailValue}>{data.BillNo}</Text>
                            </View> */}
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Amount  :</Text>
                                <Text style={styles.detailValue}>₹{data.TotalAmount}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Discount :</Text>
                                <Text style={styles.detailValue}>{data.Discount}%</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Tax  :</Text>
                                <Text style={styles.detailValue}>{data.Tax}%</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Total Amount :</Text>
                                <Text style={styles.totalAmount}>  {(!data.GrandTotal) ? "₹0" : <> ₹{data.GrandTotal.charAt(0)==="-"?data.GrandTotal.slice(1):data.GrandTotal}</>}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>paymentInsert()} style={styles.downloadButton}>
                                <Text style={styles.buttonText}>{loading?"Processing...": buttonText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity></TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    pdf: {
        alignItems: 'flex-start',
        paddingRight: 15,
        marginTop: 15,
    },
    pdfContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pdfText: {
        marginRight: 5,
        fontFamily:"Roboto-Regular",
    },
    details: {
        padding: 15,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    detailLabel: {
        fontFamily:"Roboto-Bold",

    },
    detailValue: {
      
        fontFamily:"Roboto-Regular",
    },
    totalAmount: {
    
        fontFamily:"Roboto-Bold",
        color: '#34be82',
    },
    downloadButton: {
        backgroundColor: '#34be82',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontFamily:"Roboto-Bold",
        fontSize: 16,
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        // alignItems: 'center',
        margin: 10,
        width: '80%',
    },
});

export default OutStandingBillsDetail;
