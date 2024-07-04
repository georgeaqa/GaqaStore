import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { THEME } from "../constants";
import React from "react";

const Customtext = ({ text,...restProps }) => {
  return (
    <Text style={styles.text} {...restProps}>
      {text}
    </Text>
  );
};

export default Customtext;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Agbalumo",
    color: THEME.colors.black,
  },
});
