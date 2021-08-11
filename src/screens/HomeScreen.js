import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Hi there!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
