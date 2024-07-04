import { View, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { THEME } from "../constants";
import CustomText from "./CustomText";

const CustomOrderdetail = ({ item }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardView}>
        <Image
          source={{
            uri: item.characterImage,
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.contentCard}>
          <CustomText text={"Nombre: " + item.characterName} />
          <CustomText text={"Precio: " + item.characterPrice + " $"} />

          <View style={{ flexDirection: "row", gap: 10 }}>
            <CustomText text={"Cantidad:"} />

            <CustomText text={item.quantity} />
          </View>
          <CustomText
            text={"Total: " + item.characterPrice * item.quantity + " $"}
          />
        </View>
      </View>
    </Card>
  );
};

export default CustomOrderdetail;

const styles = StyleSheet.create({
  card: {
    margin: 4,
    padding: 4,
    backgroundColor: THEME.colors.background,
  },
  cardView: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "20%",
    height: "90%",
  },
  contentCard: {
    justifyContent: "space-around",
    paddingLeft: 10,
  },
});
