import { View, StyleSheet } from "react-native";

import { MyText, MyTextBold } from "../util/MyText";
import Refresh from "../components/svgs/Refresh";

const TopDisplay = ({ quote }) => {
  if (quote === null) return null;

  const data = JSON.parse(quote);

  return (
    <View style={styles.row}>
      <View style={styles.quote}>
        <MyText style={styles.adfasdfsdfs}>{data.content}</MyText>
        <MyTextBold style={styles.author}>{data.author}</MyTextBold>
      </View>
      <Refresh style={styles.refresh} />
    </View>
  );
};

const styles = StyleSheet.create({
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
