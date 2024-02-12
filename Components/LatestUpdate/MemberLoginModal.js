import React, { useState, useRef, useEffect } from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const MemberLoginModal = ({ visible, memberId, setMemberId, setModal, setModalVisible, mobile, closeModal }) => {

    const [submitError, setSubmitError] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendOtpError, setResendOtpError] = useState('Lorem Ipsum Sit amet.');

    const handleSubmit = () => {
        if (memberId.length < 4) {
            setSubmitError('Please enter correct Member Id.');
        } else {
            submitOTP();
        }
    };

    const submitOTP = async () => {
        setLoading('Login');
        if (memberId.trim() === "") {
            setSubmitError("Member Id cannot be empty.");
            setLoading(false);
            return;
        }

        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Token 1435a113995b2c25c2376646e271312f1873a674"
        );

        var formdata = new FormData();
        formdata.append("MemberID", memberId);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        fetch("https://stgadmin.sasone.in/api/LGCadmin/MemberPaymentLogin", requestOptions)
            .then((response) => response.json())

            .then((result) => {

                if (
                    result.status_code === 200 &&
                    result.status === "Success" &&
                    result.message === "Member Not Exist"
                ) {
                    setSubmitError("Please enter registered Member Id.");
                    setModal(false);
                } else if (result.status_code === 200 && result.status === "Success") {
                    setModal(true);
                    setModalVisible(false)
                } else {
                    setSubmitError("Something went wrong!");
                    setModal(false);
                }
            })
            .catch((error) => {
                setSubmitError("Something went wrong!!");
                setModal(false);
            })
            .finally(() => {
                setLoading("");
            });
    };

    const handleChange = (value) => {
        setSubmitError("")
        const cleanedMemeberId = value.replace(/\D/g, '').slice(0, 4);
        setMemberId(cleanedMemeberId);
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}

        >
            <TouchableWithoutFeedback >
                <View style={styles.container}>
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Text style={{ fontSize: 18 }}>X</Text>
                        </TouchableOpacity>

                        <View style={styles.content}>
                            <Text style={styles.title}>Enter Member Id</Text>
                            <Text style={styles.resendOtpError}>{resendOtpError}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignContent: 'center' }}>
                                <TextInput
                                    style={[styles.input, submitError !== '' && styles.errorInput]}
                                    placeholder="Member Id"
                                    keyboardType="numeric"
                                    maxLength={4}
                                    value={mobile}
                                    onChangeText={handleChange}
                                />

                                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                                    {loading === 'Login' ? (
                                        <View style={styles.loadingContainer}>
                                            <Text style={{ fontFamily: 'Roboto-Bold', color: 'white' }}>Processing...</Text>
                                        </View>
                                    ) : (
                                        <Text style={styles.submitButtonText}>Verify OTP</Text>
                                    )}
                                </TouchableOpacity>
                            </View>



                            <Text style={styles.submitError}>{submitError}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    input: {
        height: 50,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        width: '70%',
        fontFamily: 'Roboto-Regular',
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333333',
    },
    errorInput: {
        borderColor: '#FF4D4F',
        fontFamily: 'Roboto-Regular',
    },
    modal: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '90%',
        height: 250
    },
    closeButton: {
        fontSize: 20,
        alignSelf: 'flex-end',
        marginBottom: -10,
    },
    content: {
        // marginBottom: 16,
        flex: 1,
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        marginBottom: 6,
    },
    resendOtpError: {
        color: 'gray',
        fontFamily: 'Roboto-Regular',
        marginBottom: 12,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Bold',
    },
    submitError: {
        color: 'red',
        marginBottom: 12,
        fontFamily: 'Roboto-Regular',
    },
    submitButton: {
        backgroundColor: '#34BE82',
        color: "FFFF",
        paddingVertical: 16,
        width: '28%',
        borderRadius: 4,
        fontFamily: 'Roboto-Regular',
        alignItems: 'center',
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resendButton: {
        paddingBottom: 12,
        fontFamily: 'Roboto-Regular',
        alignItems: 'center',
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default MemberLoginModal;
