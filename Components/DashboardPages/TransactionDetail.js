import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const TransactionDetail = ({ visible, onClose,buttonText,data }) => {
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
                    <View style={styles.container}>
                        <View style={styles.pdf}>
                            {/* <View style={styles.pdfContent}>
                                <Text style={styles.pdfText}>Download PDF</Text>
                                <FontAwesome name="file-pdf-o" size={20} color="red" />
                            </View> */}
                        </View>
                        <View style={styles.details}>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Bill No :</Text>
                                <Text style={styles.detailValue}>{data.OrderNo}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Date  :</Text>
                                <Text style={styles.detailValue}>{dateHandler(data.Date)}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Time  :</Text>
                                <Text style={styles.detailValue}>{data.Time}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Payment Mode :</Text>
                                <Text style={styles.detailValue}>{data.Mode}</Text>
                            </View>
                   
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Amount :</Text>
                                <Text style={styles.totalAmount}>₹{data.Cr}</Text>
                            </View>
                            {/* <TouchableOpacity style={styles.downloadButton}>
                                <Text style={styles.buttonText}>{buttonText}</Text>
                            </TouchableOpacity> */}
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

export default TransactionDetail;
