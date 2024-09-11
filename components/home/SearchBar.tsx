import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ onSearchPress, ...props }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearchPress} style={styles.iconContainer}>
        <Icon name="search" size={20} color="#999999" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="What are you looking for ?"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
  },
  searchBar: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
    letterSpacing: -0.2,
  },
  iconContainer: {
    paddingRight: 6,
  },
});

export default SearchBar;
