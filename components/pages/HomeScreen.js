import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Search from "../Search";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.h1}>Movie Database Search App</Text>
      <Search />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  h1: {
    fontSize: 30,
  },
});
