import { Image, View, TouchableOpacity } from "react-native";
import Customtext from "./CustomText";
import CustomIcon, { Icons } from "./CustomIcon";
import { useAuth } from "../providers/AuthProvider";
import { useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { log_out } from "../lib/authSupabase";
import { clearCart } from "../store/actions/cart.action";
import { router } from "expo-router";
import React from "react";

const CustomHomeMenu = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearCart());
    log_out();
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 10,
      }}
    >
      <Image
        source={{
          uri: "https://s.acdn.ur-img.com/media/players/703/703540/7035409.png?1718784586",
        }}
        style={{ width: 250, height: 250 }}
      />
      <Customtext text={user.email} />
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 10,
          borderBottomWidth: 1,
        }}
        onPress={() => router.push("profileUser")}
      >
        <CustomIcon name="profile" type={Icons.AntDesign} />
        <Customtext text="Perfil" />
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 10,
          borderBottomWidth: 1,
        }}
        onPress={() => router.push("orders")}
      >
        <CustomIcon
          name="clipboard-list-outline"
          type={Icons.MaterialCommunityIcons}
        />
        <Customtext text="Pedidos realizados" />
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 10,
          borderBottomWidth: 1,
        }}
        onPress={() => logOut()}
      >
        <CustomIcon name="log-out-outline" type={Icons.Ionicons} />
        <Customtext text="Desconectarse" />
        <CustomIcon
          name="navigate-next"
          type={Icons.MaterialIcons}
          color={theme.colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeMenu;
