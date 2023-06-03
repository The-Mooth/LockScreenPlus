import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

//api calls
import fetchCurrentTime from "../apiCalls/Time";
import fetchCurrentLocation from "../apiCalls/Location";
import fetchCurrentQuote from "../apiCalls/Quotes";

//utils
import parseTime from "../util/ParseTime";
import { MyText, MyTextBold } from "../util/MyText";

//components
import BottomDisplay from "../components/BottomDisplay";
import TopDisplay from "../components/TopDisplay";
//svgs
import ArrowUp from "../components/svgs/ArrowUp";
import ArrowDown from "../components/svgs/ArrowDown";
import Moon from "../components/svgs/Moon";
import Sun from "../components/svgs/Sun";
import Refresh from "../components/svgs/Refresh";

const ClockScreen = () => {
  //api usestates
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [quote, setQuote] = useState(null);

  //other usestates
  const [showTab, setShowTab] = useState(false);
  const [isDay, setIsDay] = useState(true);
  const [greeting, setGreeting] = useState("");

  //function to handle refresh button
  const handleRefresh = () => {
    fetchCurrentTime(setTime);
    fetchCurrentQuote(setQuote);
  };

  //api useeffects
  useEffect(() => {
    fetchCurrentTime(setTime);
    fetchCurrentQuote(setQuote);

    const interval = setInterval(() => {
      fetchCurrentTime(setTime);
    }, 60000);

    cleanupFunction = () => {
      clearInterval(interval);
    };
    
    return cleanupFunction;
  }, []);

  useEffect(() => {
    fetchCurrentLocation(time, setLocation);
    parseTime(time, setGreeting, setIsDay);
  }, [time]);

  return (
    <SafeAreaView testID="mainView" style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={
          isDay
            ? require("../../assets/bg-image-daytime.jpg")
            : require("../../assets/bg-image-nighttime.jpg")
        }
        style={styles.img}
      >
        <View style={styles.imgCover}>
          <TopDisplay quote={quote} handleRefresh={handleRefresh} />

          <BottomDisplay testID="bottomDisplay"
            time={time}
            location={location}
            isDay={isDay}
            greeting={greeting}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  moon: {
    margin: 10,
  },

  imgCover: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "space-between",
    alignItems: "center",
  },

  img: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

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
    color: "white",
    fontWeight: "bold",
  },
});

export default ClockScreen;
