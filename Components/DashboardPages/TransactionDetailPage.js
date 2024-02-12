import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {  Ionicons } from '@expo/vector-icons';

const TransactionDetailPage = ({ visible, onClose,data }) => {
    // Dummy transaction data (replace with your actual data)
    const dateHandler = (date) => {
      const dateObj = new Date(date);
      const day = dateObj.getDate();
      const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
      const year = dateObj.getFullYear();
      return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
    };

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

        
                    <View
          style={styles.container}
        >
          <View
            style={styles.innerContainer}
          >
        
            <View style={{ paddingLeft: 6 }}>
                
              <Text style={{ fontFamily: "Roboto-Bold", }}>{data.Mode}</Text>
              <Text
                style={{
                  color: "gray",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                {dateHandler(data.Date)} | {data.Time}
              </Text>
              <Text style={{ fontFamily: "Roboto-Bold" }}>Order Id</Text>
              <Text
                style={{
                  color: "gray",
                  fontFamily: "Roboto-Regular",
                  fontSize: 12,
                }}
              >
                {data.OrderNo}
              </Text>
            </View>
          </View>

          <View style={{}}>
            <Text style={{ color: "#34be82", fontFamily: "Roboto-Bold" }}>
             
              +{data.AmountPay}

            </Text>
  
          </View>
        </View>
                    {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity> */}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
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
      },
    titleContainer: {
        marginTop: 10
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
        padding: 20,
        borderRadius: 10,
        // alignItems: 'center',
        margin: 10,
        width: '90%',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#34be82',
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#34be82',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 5,
    },
    leftSide: {
        flex: 1,
        padding: 10,
        backgroundColor: '#34be82',
        color: 'white',
    },
    rightSide: {
        flex: 2,
        padding: 10,
        paddingTop: 12,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: "white",
        paddingBottom: 10,
    },
    value: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 10,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TransactionDetailPage;
