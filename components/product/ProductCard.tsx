import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IProduct } from "@/lib/type/product";
import ProductBadge from "./ProductCardBadge";
import { addToWishlist, getWishlist, removeFromWishlist } from "@/lib/wishlist";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/type/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

enum BadgeType {
  FREE_DELIVERY = "Free Delivery",
  HOT_DEAL = "Hot Deal",
  BEST_SELLER = "Best Seller",
  EXPRESS_DELIVERY = "Fast Delivery",
}
const { width } = Dimensions.get("window");

export const ProductCard = ({ product }: { product: IProduct }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isInWishList, setIsInWishList] = useState(false);

  useEffect(() => {
    const checkWishlistStatus = async () => {
      const wishList = await getWishlist();
      const foundInWishList = wishList.some(
        (item: any) => item._id === product._id
      );
      setIsInWishList(foundInWishList);
    };

    checkWishlistStatus();
  }, [product._id]); // Re-run this effect if product ID changes

  const toggleWishlist = async () => {
    if (isInWishList) {
      await removeFromWishlist(product._id);
      setIsInWishList(false);
    } else {
      await addToWishlist(product);
      setIsInWishList(true);
    }
  };

  const hasTag = (tag: string) => {
    return (
      product.display_tags?.some((displayTag: string) => displayTag === tag) ??
      false
    );
  };

  const isHotDeal = hasTag("HOT_DEAL");
  const isFreeDelivery = hasTag("FREE_DELIVERY");
  const isExpressDelivery = hasTag("EXPRESS_DELIVERY");
  const isBestSeller = hasTag("BEST_SELLER");

  const getProductBadge = () => {
    if (isExpressDelivery) {
      return BadgeType.EXPRESS_DELIVERY;
    } else if (isHotDeal) {
      return BadgeType.HOT_DEAL;
    } else if (isFreeDelivery) {
      return BadgeType.FREE_DELIVERY;
    }
  };

  const badge = getProductBadge();

  return (
    <View
      style={{
        position: "relative",
        margin: 7,
        maxWidth: width / 2 - 4,
        padding: 2,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Pressable
        style={{
          position: "absolute",
          top: 8,
          right: 10,
          backgroundColor: "white",
          borderRadius: 100,
          padding: 6,
          zIndex: 100,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 6,
        }}
        onPress={toggleWishlist}
      >
        <Ionicons
          name={isInWishList ? "heart" : "heart-outline"}
          size={20}
          color={isInWishList ? "#7C8034" : "#120f0f"}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("ProductDetail", { product });
        }}
        style={{
          flexDirection: "column",
          gap: 6,
          paddingLeft: 2,
        }}
      >
        <Image
          source={{
            uri: product.images
              ? product.images[0]
              : "https://cdn.shopify.com/s/files/1/0741/2259/2535/files/charming-white-lilies-bouquet-standard_1_1.webp?v=1704569788&width=360&height=360&crop=center",
          }}
          style={{
            width: "100%",
            height: width / 2 - 20,
            borderRadius: 20,
            resizeMode: "contain",
          }}
          alt="product image"
        />
        <View style={{ flexDirection: "row" }}>
          <ProductBadge badge={badge} />
        </View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 18,
            fontWeight: "500",
            paddingLeft: 4,
          }}
        >
          {product.title}
        </Text>
        <View style={{ flexDirection: "row", gap: 3, paddingLeft: 4 }}>
          {product.list_price &&
          product.default_price !== product.list_price ? (
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 11,
                color: "grey",
                fontWeight: "500",
              }}
            >
              {product.default_price} SAR
            </Text>
          ) : null}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            {product.list_price} SAR
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductCard;
