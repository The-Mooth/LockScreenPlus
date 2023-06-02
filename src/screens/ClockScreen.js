import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, Pressable, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import fetchCurrentTime from "../apiCalls/Time";
import fetchCurrentLocation from "../apiCalls/Location";
import fetchCurrentQuote from "../apiCalls/Quotes";

import parseTime from "../hooks/ParseTime";

const ClockScreen = () => {
  //api usestates
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [quote, setQuote] = useState(null);

  //other usestates
  const [showTab, setShowTab] = useState(false);
  const [isDay, setIsDay] = useState(false);
  const [greeting, setGreeting] = useState("");


  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleTabPress = () => {
    setShowTab(!showTab);
    Animated.timing(slideAnim, {
      toValue: showTab ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  //api useeffects
  useEffect(() => {
    fetchCurrentTime(setTime);
    fetchCurrentQuote(setQuote);
  }, []);

  useEffect(() => {
    fetchCurrentLocation(time, setLocation);
    parseTime(time, setGreeting, setIsDay);
  }, [time]);

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topRow}>
      {quote ? <Text style={styles.text}>quote works</Text> : null}
      </View>
      {time ? <Text style={styles.text}>time works</Text> : null}
      {location ? <Text style={styles.text}>location works</Text> : null}
      
    
      <Animated.View
        style={{
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, -100],
              }),
            },
          ],
        }}
      >
        <Pressable onPress={handleTabPress}>
        <Text style={styles.text}>Press me</Text>
      </Pressable>
        <Text style={styles.text}>Tab</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },

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
