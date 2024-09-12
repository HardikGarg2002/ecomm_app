import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import vector icons
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors, GlobalColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        }}
      >
        {/* Home Screen Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={"home-outline"}
                size={24}
                color={focused ? GlobalColors.primary.default : "grey"}
              />
            ),
          }}
        />

        {/* Heart Icon Tab (Favorites/Like) */}
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={"heart-outline"}
                size={24}
                color={focused ? GlobalColors.primary.default : "grey"}
              />
            ),
          }}
        />

        {/* Profile Screen Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={"person-outline"}
                size={24}
                color={focused ? GlobalColors.primary.default : "grey"}
              />
            ),
          }}
        />

        {/* WhatsApp Icon Tab */}
        <Tabs.Screen
          name="whatsapp"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5
                name="whatsapp"
                size={24}
                color={focused ? GlobalColors.primary.default : "grey"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
