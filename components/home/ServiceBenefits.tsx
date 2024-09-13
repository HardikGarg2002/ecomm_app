import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GlobalColors } from "@/constants/Colors";

const serviceBenefits = [
  {
    iconName: "truck",
    title: "4 Hours Delivery",
  },
  {
    iconName: "calendar-check",
    title: "Choose Day & Time",
  },
  {
    iconName: "people-line",
    title: "8 Million Customers Worldwide",
  },
  {
    iconName: "location-dot",
    title: "No Address, No Worries",
  },
];

const ServiceBenefits = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {serviceBenefits.map(({ iconName, title }) => (
          <View key={iconName} style={styles.benefitContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome6
                name={iconName}
                size={20}
                color={GlobalColors.secondary.foreground}
              />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 8,
    backgroundColor: GlobalColors.secondary.default, // Replace with your secondary background color
  },
  benefitContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 8,
    marginRight: 8,
  },
  iconContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 100,
    borderColor: GlobalColors.secondary.foreground, // Replace with your secondary foreground color
    borderWidth: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600", // Replace with "semibold"
    textAlign: "center",
  },
});

export default ServiceBenefits;
