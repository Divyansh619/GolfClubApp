import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HoleInOneTable = ({ data }) => {
  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();
    return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
  };
  return (
    <View style={styles.container}>

      {data.map((row, index) => (
        <View key={index} style={styles.tableRow}>
  <View>
    <View style={{display:'flex', flexDirection:'row'}}>
    <Text style={styles.headerCell}>{row.MemberName}</Text>
      </View>
      <View style={{display:'flex', flexDirection:'row'}}>
    <Text style={styles.cell}>Hole No. : </Text>
    <Text style={styles.cell}>{row.HoleNo}</Text>
      </View>
  </View>
          <Text style={styles.cell}>{dateHandler(row.Date)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%', // Make the width full screen
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      tableRow: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderStyle:'dotted',
        borderBottomColor: '#AAD9BB',
        paddingVertical: 8,
      },
      headerCell: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        // fontWeight: 'bold',
 
      },
      cell: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#555',
      },
});

export default HoleInOneTable;
