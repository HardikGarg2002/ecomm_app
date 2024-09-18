import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/type/navigation";

// Define the specific type for the route
type ProductDetailRouteProp = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const route = useRoute<ProductDetailRouteProp>();
  const { product } = route.params;
  console.log(product);
  // Increment quantity
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Decrement quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Back Button, Wishlist, Cart Icon */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}>
            <Ionicons name="cart-outline" size={24} color="black" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product Image */}
      <Image
        style={styles.productImage}
        source={{
          uri: "https://path-to-your-product-image.jpg",
        }}
      />

      {/* Product Name */}
      <Text style={styles.productName}>{product.title}</Text>

      {/* Price */}
      <Text style={styles.price}>254 SAR</Text>

      {/* Badges */}
      <View style={styles.badges}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Hot deal</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Free delivery</Text>
        </View>
      </View>

      {/* Product Details */}
      <Text style={styles.productDetail}>Category: Valentines Day Gifts</Text>
      <Text style={styles.productDetail}>Brand: fnp</Text>
      <Text style={styles.productDetail}>SKU: REDROSEAUG_01</Text>

      {/* Quantity Selector */}
      <View style={styles.quantitySelector}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityBtn}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityBtn}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  rightIcons: {
    flexDirection: "row",
  },
  cartIcon: {
    marginLeft: 20,
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "orange",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 16,
  },
  badges: {
    flexDirection: "row",
    marginLeft: 16,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "lightgreen",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 8,
  },
  badgeText: {
    color: "#000",
    fontSize: 12,
  },
  productDetail: {
    fontSize: 14,
    color: "#777",
    marginLeft: 16,
  },
  quantitySelector: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  quantityBtn: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    color: "#000",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addToCartButton: {
    backgroundColor: "#6E833B",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
  },
});
