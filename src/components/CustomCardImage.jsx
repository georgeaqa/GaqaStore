import { Image, View, StyleSheet, Pressable } from "react-native";
import { Card, Divider, useTheme } from "react-native-paper";
import CustomText from "./CustomText";
import { THEME, DIMENSIONS } from "../constants";
import React from "react";
import dimensions from "../constants/dimensions";

const CustomCardImage = ({ item, onPress }) => {
  const theme = useTheme();
  return (
    <View style={{ width: DIMENSIONS.width / 2 }}>
      <Pressable onPress={onPress}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <CustomText text={item.characterName} variant="titleMedium" />
            <Divider style={styles.cardDivider} bold />
            <Image
              style={styles.image}
              source={{
                uri: item.characterImage,
              }}
              resizeMode="contain"
            />
          </Card.Content>
        </Card>
      </Pressable>
    </View>
  );
};

export default CustomCardImage;

const styles = StyleSheet.create({
  card: {
    margin: 4,
    backgroundColor: THEME.colors.background,
  },
  cardContent: {
    alignItems: "center",
  },
  cardDivider: {
    width: "100%",
    marginTop: 4,
    borderWidth: 1,
    borderColor: THEME.colors.primary,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
