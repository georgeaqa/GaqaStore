import { View, Text, FlatList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { get_order_detail } from "../../../../lib/orderSupabase";
import { useState, useEffect } from "react";
import { CustomOrderdetail } from "../../../../components";
import { STYLES } from "../../../../constants";
import { ActivityIndicator } from "react-native-paper";

const orderId = () => {
  const { orderId } = useLocalSearchParams();
  const [orderDetail, setOrderDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchOrderDetail() {
      try {
        const orderDetailData = await get_order_detail({ order_id: orderId });
        if (orderDetailData && orderDetailData.length > 0) {
          const parsedOrderDetail = orderDetailData[0].order_detail.map(
            (item) => JSON.parse(item)
          );
          setOrderDetail(parsedOrderDetail);
        } else {
          setOrderDetail([]);
        }
      } catch (error) {
        console.error("Error fetching order detail:", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrderDetail();
  }, []);

  const renderItemOrderDetail = ({ item }) => {
    return <CustomOrderdetail item={item} />;
  };

  return (
    <View style={STYLES.container}>
      <Stack.Screen options={{ title: "Detalle del pedido"  }} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={orderDetail}
          renderItem={renderItemOrderDetail}
          keyExtractor={(item) => item.characterId}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
};

export default orderId;
