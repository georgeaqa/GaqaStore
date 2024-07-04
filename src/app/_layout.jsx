import { Stack } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { THEME } from "../constants";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import AuthProvider from "../providers/AuthProvider";
import store from "../store";
import React from "react";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...THEME.colors,
  },
};
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Agbalumo: require("../assets/fonts/Agbalumo.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AuthProvider>
          <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(auth)" />
            </Stack>
            <StatusBar style="auto" backgroundColor="#fff" />
          </SafeAreaProvider>
        </AuthProvider>
      </PaperProvider>
    </Provider>
  );
}
