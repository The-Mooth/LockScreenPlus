import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import axios from "axios";
import moment from "moment";

import fetchCurrentTime from "../apiCalls/Time";
import fetchCurrentLocation from "../apiCalls/Location";
import fetchCurrentQuote from "../apiCalls/Quotes";

const ClockScreen = () => {
  //api usestates
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [quote, setQuote] = useState(null);

  //other usestates
  const [showTab, setShowTab] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleTabPress = () => {
    setShowTab(!showTab);
    Animated.timing(slideAnim, {
      toValue: showTab ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fetchCurrentTime(setTime);
    fetchCurrentQuote(setQuote);
  }, []);

  useEffect(() => {
    fetchCurrentLocation(time, setLocation);
  }, [time]);

  return (
    <View style={styles.container}>
      {time ? <Text style={styles.text}>time works</Text> : null}
      {location ? <Text style={styles.text}>location works</Text> : null}
      {quote ? <Text style={styles.text}>quote works</Text> : null}
      <Pressable onPress={handleTabPress}>
        <Text style={styles.text}>Press me</Text>
      </Pressable>
      <Animated.View
        style={{
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100],
              }),
            },
          ],
        }}
      >
        <Text style={styles.text}>Tab</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
  },
});

export default ClockScreen;
