import { View, Image, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import React from "react";

const CustomCharacterId = ({ character }) => {
  return (
    <View style={styles.containerCharacter}>
      <Image
        style={{ width: "100%", aspectRatio: 3 / 5 }}
        source={{
          uri: character.characterImage,
        }}
      />

      <CustomText
        text={"Precio: " + character.characterPrice + "$"}
        variant="titleMedium"
      />
    </View>
  );
};

export default CustomCharacterId;

const styles = StyleSheet.create({
  containerCharacter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
