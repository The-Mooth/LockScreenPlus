import { View, StyleSheet, Pressable } from "react-native";

import { MyText, MyTextBold } from "../util/MyText";
import Refresh from "../components/svgs/Refresh";



const TopDisplay = ({ quote, handleRefresh}) => {
  if (quote === null) return null;

  const data = JSON.parse(quote);

  return (
    <View style={styles.row}>
      <View style={styles.quote}>
        <MyText style={styles.adfasdfsdfs}>{data.content}</MyText>
        <MyTextBold style={styles.author}>{data.author}</MyTextBold>
      </View>
      <Pressable onPress={handleRefresh}>
        <Refresh style={styles.refresh} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  quote: {
    width: "80%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },

  refresh: {
    margin: 10,
  },
});

export default TopDisplay;
