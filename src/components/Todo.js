import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Input, Button, theme, withGalio } from "galio-framework";

import Item from "./Item";

export default class Todo extends Component {
  state = {
    todos: ["Tomar suco", "hahahah"],
    text: ""
  };
  static defaultProps = {
    text: ""
  };
  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ""
    });
  };
  handleChange = ({ nativeEvent: { text } }) => {
    this.setState({ text });
  };
  handleDelete = text => {
    const { todos } = this.state;
    let array = [...todos];
    array = array.filter(desc => desc !== text);
    this.setState({ todos: array });
  };
  handleEdit = text => {
    const { todos } = this.state;
    // console.log(todos);
    console.log(text);
    // this.setState({todos: todos.map(item=>item===text ? :)})
  };
  render() {
    return (
      <View>
        <View style={style.Form}>
          <Input
            onChange={this.handleChange}
            value={this.state.text}
            style={[{ borderColor: theme.COLORS.THEME }, style.FormInput]}
            rounded
          />
          <Button onPress={this.addTodo} style={style.FormButton}>
            Add Todo
          </Button>
        </View>
        <View style={[style.listTodo]}>
          {this.state.todos.map((todo, index) => (
            <Item
              text={todo}
              key={index}
              handleDelete={this.handleDelete}
              onBlur={this.handleEdit}
            />
          ))}
        </View>
      </View>
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
