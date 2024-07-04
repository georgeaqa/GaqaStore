import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { CustomButton, CustomCharacterId } from "../../../components";
import { Stack, useLocalSearchParams } from "expo-router";
import { STYLES } from "../../../constants";
import { get_character } from "../../../lib/characterSupabase";
import { addToCart, removeFromCart } from "../../../store/actions/cart.action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CharacterId = () => {
  const { characterId } = useLocalSearchParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.shoppingCart);
  const [isAddToCart, setIsAddToCart] = useState(false);
  useEffect(() => {
    async function fetchCharacter() {
      try {
        const characterData = await get_character(characterId);
        setCharacter(characterData[0]);
      } catch (error) {
        console.error("Error fetching character:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacter();
  }, []);

  useEffect(() => {
    if (
      character &&
      shoppingCart.some((item) => item.characterId === character.characterId)
    ) {
      setIsAddToCart(true);
    } else {
      setIsAddToCart(false);
    }
  }, [character, shoppingCart]);

  const addToCartHandler = () => {
    dispatch(addToCart(character));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(character));
  };

  return (
    <View style={STYLES.container}>
      {isLoading ? (
        <>
          <Stack.Screen options={{ title: "Cargando..." }} />
          <ActivityIndicator size="large" />
        </>
      ) : (
        <>
          <Stack.Screen options={{ title: character.characterName }} />
          <CustomCharacterId character={character} />

          {!isAddToCart ? (
            <CustomButton
              text="Agregar al carrito"
              onPress={addToCartHandler}
            />
          ) : (
            <CustomButton
              text="Remover del carrito"
              onPress={removeFromCartHandler}
            />
          )}
        </>
      )}
    </View>
  );
};

export default CharacterId;
