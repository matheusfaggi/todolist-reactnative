import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Todo from "./src/components/Todo";

const todos = ["Tomar Corote", "Codar"];

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
