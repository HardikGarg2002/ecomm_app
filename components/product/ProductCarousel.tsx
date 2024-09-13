import { FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { IProduct } from "@/lib/type/product";

export const ProductCarousel = ({ products }: { products: IProduct[] }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item._id}
      horizontal
    />
  );
};
