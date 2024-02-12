import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecratriesTable = ({ data }) => {

  return (
    <View style={styles.container}>
      {data.map((row, index) => (
        <View key={index} style={styles.tableRow}>
          {/* <Text style={styles.cell}>{index}</Text> */}
          <Text style={styles.headerCell}>{row.Name}</Text>
          <Text style={styles.cell}>{row.StartDate+" - "+row.EndDate}</Text>
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
        paddingTop:8,
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
 // Each cell takes up equal width
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: '#333',
      },
      cell: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#555',
      },
});

export default SecratriesTable;
