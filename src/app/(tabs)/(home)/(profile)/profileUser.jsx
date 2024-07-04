import { View } from "react-native";
import { CustomButton, CustomText } from "../../../../components";
import { STYLES } from "../../../../constants";
import React from "react";
import { Stack } from "expo-router";
import { useAuth } from "../../../../providers/AuthProvider";

const profileUser = () => {
  const { user } = useAuth();
  return (
    <View style={STYLES.container}>
      <Stack.Screen options={{ title: "Perfil" }} />
      <CustomText text={user.id} />
    </View>
  );
};

export default profileUser;
