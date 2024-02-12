import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationCard = () => {
  const initialRegion = {
    latitude: 26.8467,
    longitude: 80.9462,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{ latitude: 26.8467, longitude: 80.9462 }}
          title="Lucknow Golf Club"
          description="1, Kalidas Marg, Lucknow - 226001"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default LocationCard;
