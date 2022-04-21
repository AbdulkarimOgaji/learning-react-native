import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export type TodoType = {
    action: string;
    completed: boolean;
    key: number;
  };

type TodoProps = {
    item: TodoType
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

export const Todo = ({ item, setTodos }: TodoProps) => {
    const handleCompletion = (key: number) => {
        setTodos((prev) => {
          var currentTodos = [...prev]
          currentTodos[key].completed = true
          return currentTodos;
        });
      };
    
      const handleDelete = (key: number) => {
        setTodos((prev) => prev.filter((todo) => todo.key != key));
      };
  return (
    <View style={styles.todo}>
      <Text style={ item.completed ? styles.completed : styles.todoText }>{item.action}</Text>
      <View style={styles.utils}>
      {!item.completed && (
        <TouchableOpacity onPress={() => handleCompletion(item.key)}>
          <Text style={styles.warning}>complete</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity>
        <Text style={styles.error} onPress={() => handleDelete(item.key)}>
          delete
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#bbb",
    marginVertical: 16
  },
  utils: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  todoText: {
    fontSize: 15,
  },
  completed: {
    textDecorationLine: "line-through",
    fontSize: 15
  },
  success: {
    color: "green",
    fontSize: 16,
    fontStyle: "italic",
  },
  error: {
    color: "red",
    fontSize: 16,
    fontStyle: "italic",
  },
  warning: {
    color: "orange",
    fontSize: 16,
    fontStyle: "italic",
  },
});
