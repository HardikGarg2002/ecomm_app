import React, { useRef, useEffect } from "react";
import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import bannerData from "../../data/banner.json";

const { width } = Dimensions.get("window");
const autoScrollInterval = 2500; // Interval in milliseconds (3 seconds)

const BannerItem = ({ item }: any) => (
  <View style={styles.bannerContainer}>
    <Image source={{ uri: item.imageUrl }} style={styles.bannerImage} />
  </View>
);

const BannerCarousel = () => {
  const flatListRef = useRef<FlatList<any> | null>(null);
  const scrollPosition = useRef(0);
  const dataLength = bannerData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        // Calculate the next scroll position
        scrollPosition.current =
          (scrollPosition.current + width) % (width * dataLength);
        flatListRef.current.scrollToOffset({
          offset: scrollPosition.current,
          animated: true,
        });
      }
    }, autoScrollInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [dataLength]);

  return (
    <FlatList
      ref={flatListRef}
      data={bannerData}
      renderItem={({ item }) => <BannerItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={width} // Each banner takes the full width of the screen
    />
  );
};

const bannerHeight = 140; // Calculate height based on the aspect ratio

const styles = StyleSheet.create({
  bannerContainer: {
    marginVertical: 20,
    marginTop: 25,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 30,
    overflow: "hidden", // Ensure the image respects the rounded borders
  },
  bannerImage: {
    height: bannerHeight, // Dynamically set height based on the aspect ratio
    width: "95%", // Or you can adjust based on your design preference
    resizeMode: "cover", // Ensure the image fits within the container
    borderRadius: 20, // Apply borderRadius to the image
  },
});

export default BannerCarousel;
