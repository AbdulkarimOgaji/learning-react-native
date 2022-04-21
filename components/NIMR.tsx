import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    "Habeeb",
    "Sadiq",
    "Aboboh",
    "Mufeed",
    "Mubarak",
  ]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("Submitted");
  };
  const handleItemTouch = (item: string) => {
    setPeople((prev) => {
      return prev.filter((person) => person != item);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>NIGERIAN INSTITUTE OF MEDICAL RESEARCH</Text>
      <View style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.logo}>LOGO</Text>
        </View>
        <Text style={styles.formSubHeader}>NIMR INTERNET ACCESS</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(val) => setUsername(val.nativeEvent.text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="numeric"
          value={password}
          onTextInput={(val) => setPassword(val.type)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Sign In" onPress={handleSubmit} color="green" />
        </View>
        <Text style={styles.formSubHeader}> Access NIMR user portal</Text>
        <FlatList
          data={people}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemTouch(item)}>
              <Text style={styles.scrolltext}>{item}</Text>
            </TouchableOpacity>
          )}
          scrollEnabled
          numColumns={2}
        />
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
  },
  formContainer: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 20,
    margin: 0,
  },
  formHeader: {
    backgroundColor: "green",
    padding: 30,
  },
  logo: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
  formSubHeader: {
    color: "blue",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#777",
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: "green",
    padding: 5,
    marginVertical: 30,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  scrolltext: {
    backgroundColor: "pink",
    padding: 30,
    color: "black",
  },
});
