import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../providers/AuthProvider";
import React from "react";

const _layout = () => {
  const { user } = useAuth();

  if (user) {
    return <Redirect href="homeMenu" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Agbalumo" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ title: "Registrarse" }} />
      <Stack.Screen
        name="recoverPassword"
        options={{
          title: "Recuperar contraseña",
        }}
      />
    </Stack>
  );
};

export default _layout;
