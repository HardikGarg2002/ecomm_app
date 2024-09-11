import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Import vector icons
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/common/Header";
import SubHeader from "@/components/common/SubHeader";
import { ScrollView } from "react-native-gesture-handler";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <SubHeader />
      <Header />
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
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
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
                name={focused ? "heart" : "heart-outline"}
                size={24}
                color={color}
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
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />

        {/* WhatsApp Icon Tab */}
        <Tabs.Screen
          name="contact"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="whatsapp" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
