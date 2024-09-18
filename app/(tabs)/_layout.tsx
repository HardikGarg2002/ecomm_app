import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors, GlobalColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import ProductDetail from "@/components/product/ProductDetail";
import { RootStackParamList } from "@/lib/type/navigation";
import ProductListing from "@/components/product/ProductListing";

const Stack = createStackNavigator<RootStackParamList>();
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        options={{ headerShown: false }} // Hide header for tabs
        component={MainTabs}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail} // Your product detail page component
        options={{ title: "Product Details" }}
      />
      <Stack.Screen
        name="ProductListing"
        component={ProductListing} // Your category page component
        options={{ title: "Prdouct Listing" }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="whatsapp"
              size={24}
              color={focused ? GlobalColors.primary.default : "grey"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
