import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { CheckBox } from "react-native-elements";
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
    this.setState({ toggleEdit: !this.state.toggleEdit });
    const { text } = this.state;
    this.props.handlerEdit(this.props.position, text);
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
        style={style.item}
      >
        {toggleEdit ? (
          <>
            <CheckBox
              title={text}
              iconRight
              iconType="material"
              checkedIcon="clear"
              uncheckedIcon="add"
              checkedColor="red"
            />
            <Text style={style.text}>{text}</Text>
          </>
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
  item: {
    textAlign: "left"
  }
});
