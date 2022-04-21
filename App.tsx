import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import { Todo, TodoType } from "./components/Todo"



export default function App() {
  const [todos, setTodos] = useState([] as TodoType[]);
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    setTodos((prev) => {
      var newlist = prev;
      newlist.push({ action: newTodo, completed: false, key: todos.length });
      setNewTodo("");
      return newlist;
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Abdulkarim's TODO APP</Text>
      <View style={styles.body}>
        <FlatList
          scrollEnabled
          data={todos}
          renderItem={({ item }) => (
            <Todo item={item} setTodos={setTodos}/>
          )}
        />
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          value={newTodo}
          multiline
          onChangeText={(val) => setNewTodo(val)}
        />
        <TouchableHighlight onPress={createTodo}>
          <Text style={styles.button}>Add Todo</Text>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  header: {
    textAlign: "center",
    margin: 20,
    color: "blue",
    borderRadius: 10,
    fontWeight: "bold",
  },
  
  body: {
    backgroundColor: "white",
    width: 300,
    padding: 30,
    margin: 0,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#777",
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 5,
    textAlign: "center",
    color: "#fff"
  },
  
});
