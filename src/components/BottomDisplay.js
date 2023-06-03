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

  //parse data for display
  const timeData = JSON.parse(time);
  const locationData = JSON.parse(location);

  const now = new Date(timeData.datetime);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let isAM = true;

  if (hours > 12) {
    hours = hours - 12;
    isAM = false;
  } else if (hours === 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  //logic for slider
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
        <MyText>{greeting + ", IT'S CURRENTLY"}</MyText>
      </View>

      <View style={[styles.row, {alignItems: "flex-end",}]}>
        <MyTextBold style={{fontSize: 80, fontWeight: 700}}>{hours + ":" + minutes}</MyTextBold>

        <View style={styles.column}>
          <MyText>{isAM ? "AM" : "PM"}</MyText>
          <MyText>{timeData.abbreviation}</MyText>
        </View>
      </View>

      <View style={styles.row}>
        <MyText>{"In " + locationData.city + ", " + locationData.region}</MyText>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.pressable} onPress={handleTabPress}>
        <MyText style={styles.text}>{showTab ? "LESS" : "MORE"}</MyText>
        {showTab ? <ArrowDown/> : <ArrowUp/>}
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  column: {
    flexDirection: "column",
    width: "20%",
    marginBottom: 20,
    marginLeft: 10,
  },


  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hsl(0, 0%, 80%)",
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
    width: "30%",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    //justifyContent: "flex-start",
    //alignItems: "flex-start",
    width: "100%",
  },

  container: {
    //flex: 1,
    width: "100%",
    height: "35%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    //alignItems: "center",
  },

  text: {
    //fontSize: 24,
    color: "hsl(0, 0%, 25%)",
    //fontWeight: "bold",
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
