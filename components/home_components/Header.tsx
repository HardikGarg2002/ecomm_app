import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons, you can also use react-native-vector-icons
// import Icon from 'react-native-ionicons';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Hamburger Menu Icon */}

      {/* Logo and Arabic Text */}
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Icon name="bars" size={24} color="green" />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://itpl-fp-ui-dev.up.railway.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fyf2uzrdpa%2Ffnp-ui%2Fother%2FFNP_QA.webp%3FupdatedAt%3D1716542631820&w=256&q=75',
          }}
          style={styles.logo}
        />
      </View>

      {/* Search Icon */}
      <TextInput
        style={styles.searchBar}
        placeholder="What are you looking for?"
      />
      <TouchableOpacity>
        <Icon name="search" />
        {/* <ion-icon name="search-outline"></ion-icon> */}
      </TouchableOpacity>

      {/* Cart Icon with Badge */}
      <TouchableOpacity style={styles.cartContainer}>
        <Icon name="shopping-bag" size={24} color="green" />
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white', // Add any background color you need
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: 150,
  },
  logo: {
    width: 110,
    height: 60,
    marginRight: 5,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Header;
