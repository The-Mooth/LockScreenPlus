import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import moment from 'moment';

import fetchCurrentTime from '../apiCalls/Time';

const ClockScreen = () => {
  //api usestates
  const [currentTime, setTime] = useState(null);
  const [location, setLocation] = useState(null);


  useEffect(() => {
   

    fetchCurrentTime(setTime);
  }, []);


  useEffect(() => {
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentTime}</Text>
      <Text style={styles.text}>{location}</Text>
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
