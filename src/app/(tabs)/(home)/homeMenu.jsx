import { View } from "react-native";
import { STYLES } from "../../../constants";
import React from "react";
import { CustomHomeMenu } from "../../../components";

const HomeMenu = () => {
  return (
    <View style={STYLES.container}>
      <CustomHomeMenu />
    </View>
  );
};

export default HomeMenu;
