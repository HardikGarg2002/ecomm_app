import BannerCarousel from "@/components/home/Banner";
import ShopByCategory from "@/components/home/Categories";
import ProductCard from "@/components/product/ProductCard";
import ServiceBenefits from "@/components/home/ServiceBenefits";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import Header from "@/components/common/Header";
import SubHeader from "@/components/common/SubHeader";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { getOccasionsForHomePage } from "@/lib/categories";
import { IProduct } from "@/lib/type/product";
import { GlobalColors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "@/lib/type/navigation";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  section: {
    marginTop: 14,
    paddingLeft: 14,
    width: width,
  },
  sectionSeprator: {
    marginVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  logo: { width: 50, height: 50 },

  icon: { marginHorizontal: 5 },
  banner: {
    alignItems: "center",
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
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
    marginBottom: 8,
    marginHorizontal: 2,
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
  // const bestSellerProducts: IProduct[] = [];
  const [bestSellerProducts, setBestSellerProducts] = React.useState<
    IProduct[]
  >([]);
  const [valentineDayProducts, setValentineDayProducts] = React.useState<
    IProduct[]
  >([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch for Valentine Day Category
        const ValentineDayCategory = await fetch(
          "https://itpl-fp-dev.up.railway.app/api/consumer/categories/gifts/anniversary"
        );
        const valentineDay = await ValentineDayCategory.json();
        setValentineDayProducts(valentineDay.products);

        // Fetch for Best Seller Category
        const bestSellerCategory = await fetch(
          "https://itpl-fp-dev.up.railway.app/api/consumer/categories/chocolates/birthday"
        );
        const bestSellerCategoryData = await bestSellerCategory.json();
        setBestSellerProducts(bestSellerCategoryData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

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
        <View style={styles.sectionSeprator} />
        <BannerCarousel />
        <View style={styles.sectionSeprator} />
        <Text
          style={{
            textAlign: "center",
            ...styles.sectionTitle,
          }}
        >
          KSA's #1 Florist & Gift Shop for Cakes, Hampers, Flower Delivery &
          More
        </Text>

        <ServiceBenefits />
        <View style={styles.sectionSeprator} />
        <View style={styles.section}>
          <View style={{ ...styles.header, padding: 0, paddingHorizontal: 2 }}>
            <Text style={styles.sectionTitle}>💕 Valentine's Day Gift </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("ProductListing", {
                  categorySlug: "gifts/anniversary",
                });
              }}
            >
              <Text
                style={{
                  ...styles.sectionTitle,
                  color: GlobalColors.primary.default,
                  paddingRight: 6,
                }}
              >
                view all
              </Text>
            </Pressable>
          </View>
        </View>
        <ProductCarousel products={valentineDayProducts} />
        <View style={styles.sectionSeprator} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Occassion </Text>
          <ShopByCategory inputCategory={occasionCategory} />
        </View>

        <View style={styles.sectionSeprator} />

        {/* Best Seller Gifts */}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            ...styles.section,
          }}
        >
          <Image
            source={{
              uri: "https://cdn.shopify.com/s/files/1/0741/2259/2535/files/Frame_13.svg?v=1713791920",
            }}
            style={{
              width: 28,
              height: 28,
            }}
          />
          <Text style={styles.sectionTitle}>Best Seller Gifts</Text>
        </View>
        <ProductCarousel products={bestSellerProducts} />
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
