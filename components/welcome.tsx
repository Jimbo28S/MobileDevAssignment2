import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { Tabs } from "expo-router";


export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to an app about Albertan cities
      </Text>

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  preferences: { fontSize: 16, marginVertical: 10, color: "blue" },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    width: 200,
    marginVertical: 10,
    padding: 10,
    color: "#000000"
  },
});


