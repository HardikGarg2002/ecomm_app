import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import Icon from "./Icon";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GlobalColors } from "@/constants/Colors";

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
      color: GlobalColors.secondary.foreground,
      fontWeight: "bold",
    },
    containerStyle: {
      backgroundColor: GlobalColors.secondary.default,
    },
    iconStyle: {
      color: GlobalColors.secondary.foreground,
    },
  },
  [BadgeType.BEST_SELLER]: {
    label: "Best Seller",
    icon: "star",
    style: {
      color: "yellow",
    },
    containerStyle: {
      backgroundColor: "#fff9d1",
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
      backgroundColor: "#d1ffd1",
    },
    iconStyle: {
      color: "green",
    },
  },
};

export default function ProductBadge({ badge }: { badge?: BadgeType }) {
  if (!badge) return null;
  const iconColor = badgeList[badge].iconStyle.color;
  return (
    <View style={[styles.container, badgeList[badge].containerStyle]}>
      <FontAwesome6 name={badgeList[badge].icon} size={16} color={iconColor} />
      <Text style={[styles.label, badgeList[badge].style]}>
        {badgeList[badge].label}
      </Text>
    </View>
  );
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
