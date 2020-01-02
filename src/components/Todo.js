import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { Input, Button, theme } from "galio-framework";

import Item from "./Item";

export default class Todo extends Component {
  state = {
    todos: this.props.todos,
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
    console.log(
      Alert.alert(
        "",
        `Deseja excluir a task: ${text}`,
        [
          { text: "Sim", onPress: () => this.deleteItem(text) },
          { text: "Não" }
        ],
        { cancelable: false }
      )
    );
  };
  deleteItem = text => {
    const { todos } = this.state;
    let array = [...todos];
    array = array.filter(desc => desc !== text);
    this.setState({ todos: array });
  };

  handleEdit = (index, text) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((value, i) => (i === index ? text : value))
    });
  };

  render() {
    return (
      <View>
        <View style={style.Form}>
          <Input
            onChange={this.handleChange}
            value={this.state.text}
            style={[{ borderColor: theme.COLORS.THEME }, style.FormInput]}
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
              handlerEdit={this.handleEdit}
              position={index}
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
    flexWrap: "nowrap",
    marginLeft: 20
  }
});
