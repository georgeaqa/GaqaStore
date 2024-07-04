import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Stack } from "expo-router";
import { STYLES } from "../../../constants";
import { CustomCharacterCart } from "../../../components/";
import { CustomButton } from "../../../components/";
import { save_order } from "../../../lib/orderSupabase";
import { useAuth } from "../../../providers/AuthProvider";
import { clearCart } from "../../../store/actions/cart.action";
import React from "react";

const CharacterCart = () => {
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const totalCart = useSelector((state) => state.cart.total);
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onPressSaveOrder = () => {
    if (shoppingCart.length === 0) {
      alert("No hay productos en el carrito");
      return;
    }
    save_order({
      user_id: user.id,
      order_detail: shoppingCart,
      order_total: totalCart,
    });
    dispatch(clearCart());
  };

  const renderItemListCharacter = ({ item }) => {
    return <CustomCharacterCart item={item} />;
  };

  return (
    <View style={STYLES.container}>
      <Stack.Screen options={{ title: "Carrito" }} />
      <FlatList
        data={shoppingCart}
        renderItem={renderItemListCharacter}
        keyExtractor={(item) => item.characterId}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      />
      <CustomButton
        text={`Confirmar Compra: ${totalCart} $`}
        onPress={onPressSaveOrder}
      />
    </View>
  );
};

export default CharacterCart;
