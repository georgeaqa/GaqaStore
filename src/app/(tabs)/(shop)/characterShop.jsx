import { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { CustomCardImage, CustomText } from "../../../components";
import { router, Stack } from "expo-router";
import { STYLES } from "../../../constants";
import { get_characters } from "../../../lib/characterSupabase";

const CharacterShop = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const charactersData = await get_characters();
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  const renderItemCharacter = ({ item }) => {
    return (
      <CustomCardImage
        item={item}
        onPress={() => router.push(`/(shop)/${item.characterId}`)}
      />
    );
  };

  const filteredCharacters = characters.filter((character) =>
    character.characterName
      .toLowerCase()
      .includes(searchCharacter.toLowerCase())
  );

  return (
    <View style={STYLES.container}>
      <Stack.Screen
        options={{
          headerTitle: "Tienda",
          headerSearchBarOptions: {
            placeholder: "Buscar personaje",
            onChangeText: (event) => setSearchCharacter(event.nativeEvent.text),
          },
        }}
      />

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : filteredCharacters.length === 0 ? (
          <CustomText text="No se encontraron resultados." />
        ) : (
          <FlatList
            data={filteredCharacters}
            renderItem={renderItemCharacter}
            keyExtractor={(item) => item.characterId}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default CharacterShop;
