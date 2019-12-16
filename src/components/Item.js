import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Input, Button, theme, withGalio } from "galio-framework";

export default class Item extends Component {
  state = {
    toggleEdit: true,
    text: this.props.text
  };

  handlePress = event => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  handleBlur = e => {
    // console.log("passou");
    this.setState({ toggleEdit: !this.state.toggleEdit });
    const { text } = this.state;
    this.props.onBlur(text);
  };
  handleDelete = e => {
    console.log(e);
  };
  handleChange = ({ nativeEvent: { text } }) => {
    this.setState({ text });
  };
  render() {
    const { toggleEdit } = this.state;
    const { handleDelete, text } = this.props;
    return (
      <TouchableOpacity
        onLongPress={() => handleDelete(text)}
        onPress={this.handlePress}
      >
        {toggleEdit ? (
          <Text style={style.text}>{text}</Text>
        ) : (
          <Input
            onChange={this.handleChange}
            value={this.state.text}
            onBlur={this.handleBlur}
            autoFocus={true}
            defaultValue={this.state.text}
            color={theme.COLORS.THEME}
            style={{ borderColor: theme.COLORS.THEME }}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  listTodo: {
    flex: 6,
    alignItems: "center"
  },
  text: {
    color: "#FFF",
    fontSize: 40
  },
  Form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  FormInput: {
    flexShrink: 1
  },
  FormButton: {
    width: 100,
    flexWrap: "nowrap"
  }
});
