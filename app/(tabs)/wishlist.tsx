import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getWishlist, removeFromWishlist } from "@/lib/wishlist";
import { IProduct } from "@/lib/type/product";
import ProductCard from "@/components/product/ProductCard";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import SubHeader from "@/components/common/SubHeader";
import Header from "@/components/common/Header";
import { GlobalColors } from "@/constants/Colors";

const { width } = Dimensions.get("window");

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      const storedWishlist = await getWishlist();
      setWishlist(storedWishlist);
      setLoading(false);
    };

    fetchWishlist();
  }, []);

  const renderWishlistItem = ({ item }: { item: IProduct }) => (
    <View style={styles.cardContainer}>
      <ProductCard product={item} />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading Wishlist...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      ) : (
        <ScrollView stickyHeaderIndices={[1]}>
          <SubHeader />
          <Header />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: 500 }}> Wishlist</Text>
            <View
              style={{
                // backgroundColor: "#FFFBF7",
                backgroundColor: GlobalColors.secondary.default,
                padding: 8,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: GlobalColors.secondary.foreground,
                  // color: "#E2AD26"
                }}
              >
                {wishlist.length} items
              </Text>
            </View>
          </View>
          <FlatList
            data={wishlist}
            keyExtractor={(item) => item._id}
            renderItem={renderWishlistItem}
            numColumns={2} // Display two columns
            columnWrapperStyle={styles.columnWrapper}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "#999",
  },
  columnWrapper: {
    justifyContent: "space-between", // Ensure the two cards are spaced evenly
  },
  cardContainer: {
    // flex: 1,
    margin: 8, // Add some margin between cards
    maxWidth: width / 2 - 24, // Ensure the card takes up half the width with some padding
  },
});

export default Wishlist;
