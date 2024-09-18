import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/type/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width } = Dimensions.get("window");
const ShopByCategory = ({ inputCategory }: any) => {
  const [categories, setCategories] = useState([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Fetch categories from the backend when the component mounts
    const fetchCategories = async () => {
      try {
        const categoryInfo = await fetch(
          "https://itpl-fp-dev.up.railway.app/api/categories"
        );
        const categoriesJson = await categoryInfo.json();
        console.log("fetch categories called");
        setCategories(categoriesJson);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    inputCategory ? setCategories(inputCategory) : fetchCategories();
  }, []);

  // Function to render each category item
  const renderCategoryItem = ({ item }: any) => (
    <Pressable
      style={styles.categoryItem}
      onPress={() => {
        navigation.navigate("ProductListing", { categorySlug: item.slug });
      }}
    >
      <Image
        source={{
          uri:
            item.img_url ||
            "https://itpl-fp-ui-dev.up.railway.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0684%2F7433%2F9577%2Fproducts%2Fbouquet-of-pink-roses_1_678a360b-0e83-4e84-8ad2-5f5dfee5b2b5.jpg%3Fv%3D1709916070&w=640&q=75",
        }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item: any) => item._id.toString()}
        horizontal // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hide the scrollbar
        pagingEnabled // Enable snapping to each category
        decelerationRate="fast" // Makes snapping smoother
        snapToInterval={width * 0.2} // Each item will take 75% of the screen width
        snapToAlignment="center"
        contentContainerStyle={styles.carouselContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryItem: {
    width: width * 0.25, // Each item will take 25% of the screen width
    alignItems: "center",
    marginRight: 16,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 14,
    marginBottom: 2,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
  carouselContainer: {
    paddingRight: width * 0.07, // Add some padding for centering
  },
});

export default ShopByCategory;
