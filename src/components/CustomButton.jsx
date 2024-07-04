import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({ text, ...restProps }) => {
  return (
    <Button
      style={styles.button}
      mode="contained"
      labelStyle={{ fontFamily: "Agbalumo" }}
      {...restProps}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
});
