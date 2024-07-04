import { View, FlatList } from "react-native";
import { get_order } from "../../../../lib/orderSupabase";
import { useAuth } from "../../../../providers/AuthProvider";
import { STYLES } from "../../../../constants";
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native-paper";
import { CustomOrders,CustomText } from "../../../../components";
import { router } from "expo-router";

const orders = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const orderData = await get_order({ user_id: user.id });
        setOrder(orderData);
      } catch (error) {
        console.error("Error fetching order:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrder();
  }, [order]);

  const renderItemOrder = ({ item }) => {
    return (
      <CustomOrders
        item={item}
        onPress={() => router.push(`/(orders)/${item.id}`)}
      />
    );
  };

  return (
    <View style={STYLES.container}>
      <Stack.Screen options={{ title: "Pedidos realizados" }} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : order.length === 0 ? (
        <CustomText text="No se encontraron resultados." />
      ) : (
        <FlatList
          data={order}
          renderItem={renderItemOrder}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
};

export default orders;
