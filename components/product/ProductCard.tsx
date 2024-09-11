import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import HotDealBadge from "@/components/common/HotDealBadge";
// import ExpressDeliveryBadge from "./FastDeliveryBadge";
// import LikeProductBadge from "./LikeProductBadge";
// import BestSellerBadge from "./BestSellerBadge";
import { IProduct } from "@/lib/type/product";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductBadge from "./ProductCardBadge";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

enum BadgeType {
  FREE_DELIVERY = "Free Delivery",
  HOT_DEAL = "Hot Deal",
  BEST_SELLER = "Best Seller",
  EXPRESS_DELIVERY = "Fast Delivery",
}

export const ProductCard = ({ product }: { product: any }) => {
  function hasTag(product: IProduct, tag: string) {
    return (
      product.display_tags?.some((displayTag) => displayTag === tag) ?? false
    );
  }
  const isHotDeal = hasTag(product, "HOT_DEAL");
  const isFreeDelivery = hasTag(product, "FREE_DELIVERY");
  const isExpressDelivery = hasTag(product, "EXPRESS_DELIVERY");
  const isBestSeller = hasTag(product, "BEST_SELLER");
  const getProductBadge = () => {
    if (isExpressDelivery) {
      return BadgeType.EXPRESS_DELIVERY;
    } else if (isHotDeal) {
      return BadgeType.HOT_DEAL;
      // } else if (isBestSeller) {
      //   return BadgeType.BEST_SELLER;
    } else if (isFreeDelivery) {
      return BadgeType.FREE_DELIVERY;
    }
  };
  const badge = getProductBadge();

  return (
    <View style={{ position: "relative", margin: 5 }}>
      {/* <LikeProductBadge /> */}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          borderRadius: 100,
          padding: 6,
          zIndex: 100,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
        }}
      >
        <Ionicons
          name={false ? "heart" : "heart-outline"}
          size={24}
          color={false ? "#FF0000" : "#120f0f"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Navigate to product details
        }}
        style={{ flexDirection: "column", gap: 6, marginLeft: 16 }}
      >
        <Image
          source={{
            uri: product.images
              ? product.images[0]
              : "https://cdn.shopify.com/s/files/1/0741/2259/2535/files/charming-white-lilies-bouquet-standard_1_1.webp?v=1704569788&width=360&height=360&crop=center",
          }}
          style={{
            width: 180,
            height: 200,
            borderRadius: 12,
            resizeMode: "contain",
          }}
          alt="product image"
        />
        <View style={{ flexDirection: "row", gap: 4 }}>
          <ProductBadge badge={badge} />
        </View>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 18,
            fontWeight: "500",
            paddingLeft: 2,
          }}
        >
          {product.title}
        </Text>
        <View style={{ flexDirection: "row", gap: 3 }}>
          {product.list_price &&
          product.default_price !== product.list_price ? (
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 11,
                color: "#666",
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
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
