import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Agbalumo" },
      }}
    >
      <Stack.Screen name="homeMenu" options={{ title: "Menu" }} />
      <Stack.Screen name="(orders)" options={{ headerShown: false }} />
      <Stack.Screen name="(profile)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
