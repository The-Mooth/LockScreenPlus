import {View, StyleSheet, Text, Animated, Pressable,} from "react-native";
import React, { useState, useEffect, useRef } from "react";


const BottomDisplay = (time, location, isDay) => {
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
            <View style={styles.bottomRow}>
            {time ? <Text style={styles.text}>time works</Text> : null}
            {location ? <Text style={styles.text}>location works</Text> : null}
            {isDay ? <Text style={styles.text}>isDay works</Text> : null}
            </View>
        );

}

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
