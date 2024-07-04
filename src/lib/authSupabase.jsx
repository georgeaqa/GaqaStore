import { supabase } from "./supabase";
import { Alert } from "react-native";

export async function sign_up_with_password({ email, password }) {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    } else {
      Alert.alert("Registro exitoso", "¡Gracias por registrarte!");
    }
  } catch (error) {
    Alert.alert("Error al registrarse:", error.message);
  }
}

export async function sign_in_with_password({ email, password }) {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    } else {
      Alert.alert("Inicio de sesión exitoso", "¡Gracias por iniciar sesión!");
    }
  } catch (error) {
    Alert.alert("Error al iniciar sesión:", error.message);
  }
}

export async function log_out() {
  try {
    await supabase.auth.signOut();
    Alert.alert("Desconectado", "¡Gracias por desconectarte!");
  } catch (error) {
    Alert.alert("Error", error.message);
  }
}
