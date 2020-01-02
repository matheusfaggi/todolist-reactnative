import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import Todo from "./src/components/Todo";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Todo todos={["Primeira task", "Segunda Task"]} />
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
