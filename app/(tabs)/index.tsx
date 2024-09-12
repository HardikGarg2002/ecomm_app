import BannerCarousel from "@/components/home/Banner";
import ShopByCategory from "@/components/home/Categories";
import ProductCard from "@/components/product/ProductCard";
import ServiceBenefits from "@/components/home/ServiceBenefits";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import Header from "@/components/common/Header";
import SubHeader from "@/components/common/SubHeader";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { getOccasionsForHomePage } from "@/lib/categories";

const styles = StyleSheet.create({
  section: {
    marginVertical: 14,
    paddingLeft: 14,
  },
  header: {
    flexDirection: "row", // Specify 'row' to ensure type safety
    alignItems: "center", // Specify valid FlexAlignType
    padding: 10,
    justifyContent: "space-between", // Valid FlexJustifyType
  },
  logo: { width: 50, height: 50 },

  icon: { marginHorizontal: 5 },
  banner: {
    alignItems: "center", // Explicitly type 'center'
    marginVertical: 20,
  },
  bannerImage: { width: "100%", height: 200 },
  bannerText: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  bannerSubText: { fontSize: 16, color: "gray" },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  statText: { fontSize: 16 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    marginBottom: 8,
    // marginHorizontal: 14,
  },
  footerBanner: {
    height: 125,
    width: "100%",
    marginVertical: 30,
    borderRadius: 10,
    resizeMode: "contain",
  },
});

const App = () => {
  const occasionCategory = getOccasionsForHomePage();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView stickyHeaderIndices={[1]}>
        {/* Header */}
        <SubHeader />
        <Header />
        {/* section seprator */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category </Text>
          <ShopByCategory />
          <ShopByCategory inputCategory={occasionCategory} />
        </View>
        <BannerCarousel />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginVertical: 10,
            marginBottom: 14,
            lineHeight: 24,
            textAlign: "center",
          }}
        >
          KSA's #1 Florist & Gift Shop for Cakes, Hampers, Flower Delivery &
          More
        </Text>
        <ServiceBenefits />

        <Text style={styles.sectionTitle}> 💕 Valentine's Day Gift </Text>
        <ProductCarousel />
        {/* Shop by Occasion */}
        <Text style={styles.sectionTitle}>Shop by Occassion </Text>

        <ShopByCategory inputCategory={occasionCategory} />

        {/* Best Seller Gifts */}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          <Image
            source={{
              uri: "https://cdn.shopify.com/s/files/1/0741/2259/2535/files/Frame_13.svg?v=1713791920",
            }}
            style={{
              width: 28,
              height: 28,
              marginTop: 14,
            }}
          />
          <Text style={styles.sectionTitle}>Best Seller Gifts</Text>
        </View>
        <ProductCarousel />
        <Image
          source={{
            uri: "https://ik.imagekit.io/yf2uzrdpa/fnp-ui/other/image%2021.png?updatedAt=1725557652396",
          }}
          style={styles.footerBanner}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
