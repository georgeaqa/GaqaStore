import { Tabs } from "expo-router";
import CustomIcon, { Icons } from "../../components/CustomIcon";
import { useTheme } from "react-native-paper";
import { Redirect } from "expo-router";
import { useAuth } from "../../providers/AuthProvider";
import React from "react";
import { useSelector } from "react-redux";

const _layout = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const cart = useSelector((state) => state.cart.shoppingCart);

  if (!user) {
    return <Redirect href="(auth)" />;
  }

  const tabs = [
    {
      name: "(home)",
      type: Icons.Ionicons,
      activeIcon: "home",
      inActiveIcon: "home-outline",
    },
    {
      name: "(shop)",
      type: Icons.Ionicons,
      activeIcon: "storefront",
      inActiveIcon: "storefront-outline",
    },
    {
      name: "(listCart)",
      type: Icons.Ionicons,
      activeIcon: "cart",
      inActiveIcon: "cart-outline",
      badge: cart.length,
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: theme.colors.primary,
        },
      }}
    >
      {tabs.map((_, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={_.name}
            options={{
              tabBarBadge: _.badge,
              tabBarIcon: ({ color, size, focused }) => (
                <CustomIcon
                  name={focused ? _.activeIcon : _.inActiveIcon}
                  type={_.type}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default _layout;
