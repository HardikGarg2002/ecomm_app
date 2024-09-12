import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct } from "./type/product";

// Key to store wishlist
const WISHLIST_KEY = "wishlist";

export const addToWishlist = async (product: IProduct) => {
  try {
    const wishlist = await getWishlist();
    wishlist.push(product);
    await AsyncStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

export const removeFromWishlist = async (productId: string) => {
  try {
    const wishlist = await getWishlist();
    const updatedWishlist = wishlist.filter(
      (item: IProduct) => item._id !== productId
    );
    await AsyncStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
  } catch (error) {
    console.error("Error removing from wishlist:", error);
  }
};

export const getWishlist = async () => {
  try {
    const wishlist = await AsyncStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return [];
  }
};
