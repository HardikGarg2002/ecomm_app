import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // For icons, you can also use react-native-vector-icons
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Sidebar from "../navigation/Sidebar";
import Sidebardata from "../../data/navigation.json";
import SearchBar from "../home/SearchBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={styles.header}>
      <SafeAreaView>
        {/* Toggle Sidebar */}
        <Modal
          transparent={true}
          visible={isSidebarOpen}
          animationType="slide"
          onRequestClose={toggleSidebar}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.sidebarContainer}>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={toggleSidebar}
              >
                <Ionicons name="close-outline" size={22} color="grey" />
              </TouchableOpacity>
              <Sidebar data={Sidebardata} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>

      {/* Logo and Hamburger Menu Icon */}
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
          <Octicons name="three-bars" size={22} color="green" />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://itpl-fp-ui-dev.up.railway.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fyf2uzrdpa%2Ffnp-ui%2Fother%2FFNP_QA.webp%3FupdatedAt%3D1716542631820&w=256&q=75",
          }}
          style={styles.logo}
        />
      </View>
      <SearchBar />
      {/* Cart Icon with Badge */}
      <TouchableOpacity style={styles.cartContainer}>
        <Ionicons name="bag-outline" size={24} color="green" />
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "white", // Add any background color you need
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginHorizontal: 2,
  },
  logo: {
    width: 110,
    height: 60,
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    padding: 5,
    // borderWidth: 1,
    // borderRadius: 5,
  },
  cartContainer: {
    position: "relative",
    margin: 5,
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "orange",
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebarContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "80%", // Adjust width as needed
    padding: 10,
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 10,
    backgroundColor: "#dedcdc",
    padding: 8,
    borderRadius: 100,
  },
});

export default Header;
