import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Transactions from './Transactions';
import PaidBills from './PaidBills';
import OutStandingBills from './OutStandingBills';

const BillandTransaction = ({outStandingData,transactions,paidBills,FetchOutStandingBills}) => {
    const [selectedValue, setSelectedValue] = useState('Outstanding Bills');
    const scrollDataTwo = [
        { name: 'Outstanding Bills' },
        { name: 'Paid Bills' },
        // { name: 'Transaction' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.dropdownContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.dropdown}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                    }
                >
                    {scrollDataTwo.map((item, index) => (
                        <Picker.Item
                            key={index}
                            style={{fontFamily:"Roboto-Regular",}}
                            label={item.name}
                            value={item.name}
                        />
                    ))}
                </Picker>
            </View>
            {
                selectedValue === "Outstanding Bills" ? <OutStandingBills FetchOutStandingBills={FetchOutStandingBills} data={outStandingData} /> :
                    selectedValue === "Paid Bills" ? <PaidBills data={paidBills}/> :
                        selectedValue === "Transaction" ? <Transactions data={transactions} />
                            : ""
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        //    alignSelf:"center",
        marginTop: 20
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: '#34be82',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        // alignSelf:"center"
    },
    dropdown: {
        fontFamily:"Roboto-Regular",
        fontSize: 14,
        color: '#000',

    },
    selectedValueText: {
        fontSize: 14,
        fontFamily:"Roboto-Regular",
        fontWeight: 'bold',
    },
});

export default BillandTransaction;
