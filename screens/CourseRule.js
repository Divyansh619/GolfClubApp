// Courserule.js
import { Entypo} from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, LogBox } from 'react-native';
import NoDataFound from '../Components/NoDataFound';
const Courserule = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    FetchData()
  }, [])

  const FetchData = () => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 1435a113995b2c25c2376646e271312f1873a674");
    myHeaders.append("Content-Type", "application/json");

    var raw = ""

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://stgadmin.sasone.in/api/LGCfrontend/CourseRuleList", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "Success" && result.status_code === 200) {
          setData(result.data)
        }
        else {
          setData("")
        }
      })
      .catch(error => console.log('error', error)).finally(() => setLoading(false))
  }

  return (
    <ScrollView>
         {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} color="#34be82" />
      ) : <>
        {data ?  <View style={styles.container}>
        <View style={styles.listContainer}>
          {data.map((row, index) => (
            <View key={index} style={styles.tableRow}>
                  <Entypo name="arrow-bold-right" style={styles.icon} size={12 } color="#7DBE80" /> 
              <Text style={styles.cell}>{row.RuleDescription}</Text>
            </View>
          ))}
        </View>
      </View>: <NoDataFound />}</>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  loader: {
    width: "100%",
    height: "100%"
},
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation: 2,
    width: "100%",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  icon: {
    paddingTop: 5,
    paddingRight: 10
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingRight: 10,
    borderStyle:'dotted',
    borderBottomColor: '#AAD9BB',
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1, // Each cell takes up equal width
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#333',
  },
  cell: {
    flex: 1, // Each cell takes up equal width
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#555',
  },
});

export default Courserule;
