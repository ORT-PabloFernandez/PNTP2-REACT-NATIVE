import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json"
      );
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <UserList items={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
