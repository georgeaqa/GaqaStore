import { Alert } from "react-native";
import { supabase } from "./supabase";

export async function get_characters() {
  try {
    const { data, error } = await supabase
      .from("character")
      .select("*")
      .order("characterName", { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    Alert.alert("Error al obtener los personajes:", error.message);
  }
}

export async function get_character(characterId) {
  try {
    const { data, error } = await supabase
      .from("character")
      .select("*")
      .eq("characterId", characterId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    Alert.alert("Error al obtener el personaje:", error.message);
  }
}
