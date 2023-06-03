import { View, StyleSheet, Text, Animated, Pressable } from "react-native";
import React, { useState, useEffect, useRef } from "react";

//utils
import { MyText, MyTextBold } from "../util/MyText";

//svgs
import ArrowUp from "../components/svgs/ArrowUp";
import ArrowDown from "../components/svgs/ArrowDown";
import Moon from "../components/svgs/Moon";
import Sun from "../components/svgs/Sun";

const BottomDisplay = ({ time, location, isDay, greeting }) => {
  //wait for api calls to finish
  if (!time || !location) {
    return null;
  }

  const timeData = JSON.parse(time);
  const locationData = JSON.parse(location);

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

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {isDay ? <Sun /> : <Moon />}
        <MyText>
          {greeting + ", IT'S CURRENTLY"}
        </MyText>
      </View>
      <View style={styles.row}>
        <MyTextBold>{timeData.datetime}</MyTextBold>
        </View>
        <View style={styles.row}>
          </View>
      {time ? <Text style={styles.text}>time works</Text> : null}
      {location ? <Text style={styles.text}>location works</Text> : null}
      {isDay ? <Text style={styles.text}>isDay works</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    //justifyContent: "flex-start",
    //alignItems: "flex-start",
    width: "100%",
  },

  container: {
    //flex: 1,
    width: "100%",
    //height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});

export default BottomDisplay;
/*
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
      */
