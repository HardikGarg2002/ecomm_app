import { Text, View, Image, StyleSheet } from "react-native";

export default function SubHeader() {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/images/location.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text> Deliver to: </Text>
        <Text style={{ fontWeight: "bold" }}>Riyadh</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginRight: 3 }}>Sign In </Text>
        <Text>Register</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fbfbfb",
  },
  logo: { width: 50, height: 50 },

  icon: { marginHorizontal: 5 },
});
