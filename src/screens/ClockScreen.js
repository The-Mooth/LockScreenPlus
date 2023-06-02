import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import moment from 'moment';

import fetchCurrentTime from '../apiCalls/Time';
import fetchCurrentLocation from '../apiCalls/Location';

const ClockScreen = () => {
  //api usestates
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);


  useEffect(() => {
    fetchCurrentTime(setTime);
  }, []);


  useEffect(() => {
    fetchCurrentLocation(time, setLocation);
  }, []);


  return (
    <View style={styles.container}>
      {time ? <Text style={styles.text}>time works</Text> : null}
      {location ? <Text style={styles.text}>location works</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default ClockScreen;
