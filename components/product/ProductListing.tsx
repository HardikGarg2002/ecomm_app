import { RootStackParamList } from "@/lib/type/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";

type ProductListRouteProp = RouteProp<RootStackParamList, "ProductListing">;

export default function ProductListing() {
  const route = useRoute<ProductListRouteProp>();
  const { categorySlug } = route.params;
  console.log(categorySlug);
  const [categoryData, setCategoryData] = useState<any>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch for Valentine Day Category
        const category = await fetch(
          `https://itpl-fp-dev.up.railway.app/api/consumer/categories/${categorySlug}`
        );
        const data = await category.json();
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <View>
      <Text>{categoryData?.title}</Text>
      <Text>herrdgfh</Text>
    </View>
  );
}
