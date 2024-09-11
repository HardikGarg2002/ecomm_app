import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Icon from "./Icon";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

enum BadgeType {
  FREE_DELIVERY = "Free Delivery",
  HOT_DEAL = "Hot Deal",
  BEST_SELLER = "Best Seller",
  EXPRESS_DELIVERY = "Fast Delivery",
}
const badgeList = {
  [BadgeType.FREE_DELIVERY]: {
    label: "Free Delivery",
    icon: "truck-ramp-box",
    style: {
      color: "orange",
    },
    containerStyle: {
      backgroundColor: "#ffecd1", // Example background color
    },
    iconStyle: {
      color: "orange",
    },
  },
  [BadgeType.HOT_DEAL]: {
    label: "Hot Deal",
    icon: "fire",
    style: {
      color: "#E2AD26",
      fontWeight: "bold",
    },
    containerStyle: {
      backgroundColor: "#7C80340F", // Example background color
    },
    iconStyle: {
      color: "#E2AD26",
    },
  },
  [BadgeType.BEST_SELLER]: {
    label: "Best Seller",
    icon: "star",
    style: {
      color: "yellow",
    },
    containerStyle: {
      backgroundColor: "#fff9d1", // Example background color
    },
    iconStyle: {
      color: "#E2AD26",
    },
  },
  [BadgeType.EXPRESS_DELIVERY]: {
    label: "Fast Delivery",
    icon: "truck-fast",
    style: {
      color: "green",
    },
    containerStyle: {
      backgroundColor: "#d1ffd1", // Example background color
    },
    iconStyle: {
      color: "green",
    },
  },
};

export default function ProductBadge({ badge }: { badge?: BadgeType }) {
  return badge ? (
    <View style={[styles.container, badgeList[badge].containerStyle]}>
      <FontAwesome6
        name={badgeList[badge].icon}
        size={22}
        color={badgeList[badge].iconStyle}
      />
      <Text style={[styles.label, badgeList[badge].style]}>
        {badgeList[badge].label}
      </Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    backgroundColor: "#secondary-color",
  },
  label: {
    fontSize: 14,
    paddingHorizontal: 4,
  },
});
