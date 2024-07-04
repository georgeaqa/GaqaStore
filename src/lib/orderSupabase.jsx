import { supabase } from "./supabase";
import { Alert } from "react-native";

export async function save_order({ user_id, order_detail, order_total }) {
  try {
    const { error } = await supabase.from("orders").insert({
      user_id,
      order_detail,
      order_total,
    });

    if (error) {
      throw new Error(error.message);
    } else {
      Alert.alert("Pedido comprado", "¡Gracias por comprar!");
    }
  } catch (error) {
    Alert.alert("Error al comprar:", error.message);
  }
}

export async function get_order({ user_id }) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error) {
    Alert.alert("Error al obtener pedido:", error.message);
  }
}

export async function get_order_detail({ order_id }) {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("order_detail")
      .eq("id", order_id);

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  } catch (error) {
    Alert.alert("Error al obtener pedido:", error.message);
  }
}
