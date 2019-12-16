import React, { Component } from "react";
import { Text, GalioProvider } from "galio-framework";
import { StyleSheet } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <GalioProvider>
        <Text h1 style={style.textDefault}>
          Todo List
        </Text>
      </GalioProvider>
    );
  }
}

const style = StyleSheet.create({
  textDefault: {
    color: "#fff",
    flex: 0,
    alignItems: "flex-start",
    marginTop: 20
  }
});
