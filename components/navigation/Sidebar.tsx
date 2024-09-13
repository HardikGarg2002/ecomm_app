import React, { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Expo, or install `react-native-vector-icons` for arrow icons
import { INavigation } from "@/lib/type/navigation";

const Sidebar = ({ data }: { data: INavigation[] }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection((prevLabel) => (prevLabel === label ? null : label));
  };

  const renderItems = (items: any) => {
    return items.map((item: any) => (
      <Pressable key={item.url} style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.label}</Text>
      </Pressable>
    ));
  };

  const renderSection = ({ item }: any) => {
    const isExpanded = expandedSection === item.label;

    return (
      <View style={styles.sectionContainer}>
        <Pressable
          onPress={() => toggleSection(item.label)}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>{item.label}</Text>
          <Pressable
            style={{
              alignSelf: "flex-end",
              margin: 10,
              backgroundColor: "#f0ebeb",
              padding: 8,
              borderRadius: 100,
            }}
          >
            <Ionicons
              name={isExpanded ? "chevron-up" : "chevron-down"}
              size={20}
              color={isExpanded ? "gray" : "black"}
            />
          </Pressable>
        </Pressable>
        {isExpanded && (
          <View style={styles.subsectionContainer}>
            {item.list.map((subsection: any) => (
              <View key={subsection._id} style={styles.subsection}>
                <Text style={styles.subsectionTitle}>{subsection.label}</Text>
                {renderItems(subsection.item)}
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderSection}
      keyExtractor={(item) => item.label}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  sectionContainer: {
    marginVertical: 15,
    // marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#000",
  },
  subsectionContainer: {
    marginTop: 15,
  },
  subsection: {
    marginBottom: 10,
  },
  subsectionTitle: {
    marginLeft: 5,
    fontSize: 15,
    color: "#f39c12",
    marginBottom: 3,
    fontWeight: 500,
  },
  itemContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  itemText: {
    color: "grey",
    fontSize: 13,
    fontWeight: 400,
  },
});

export default Sidebar;
