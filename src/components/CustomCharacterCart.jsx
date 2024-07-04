import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme, Card } from "react-native-paper";
import { useDispatch } from "react-redux";
import { THEME } from "../constants";
import {
  incrementCartCharacterQuantity,
  decrementCartCharacterQuantity,
  removeFromCart,
} from "../store/actions/cart.action";
import CustomIcon, { Icons } from "./CustomIcon";
import CustomText from "./CustomText";

const CustomCharacterCart = ({ item }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(incrementCartCharacterQuantity(item));
  };

  const onDecrement = () => {
    dispatch(decrementCartCharacterQuantity(item));
  };
  const onRemove = () => {
    dispatch(removeFromCart(item));
  };

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
            <TouchableOpacity onPress={onIncrement}>
              <CustomIcon
                name="pluscircleo"
                type={Icons.AntDesign}
                color={theme.colors.success}
              />
            </TouchableOpacity>
            <CustomText text={item.quantity} />
            <TouchableOpacity onPress={onDecrement}>
              <CustomIcon
                name="minuscircleo"
                type={Icons.AntDesign}
                color={theme.colors.error}
              />
            </TouchableOpacity>
          </View>
          <CustomText
            text={"Total: " + item.characterPrice * item.quantity + " $"}
          />
        </View>
        <TouchableOpacity onPress={onRemove} style={{ marginLeft: "auto" }}>
          <CustomIcon
            name="delete"
            type={Icons.AntDesign}
            color={theme.colors.error}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default CustomCharacterCart;

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
    paddingLeft: 10,
  },
});
