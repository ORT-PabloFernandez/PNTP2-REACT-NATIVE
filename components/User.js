import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const User = (props) => {
  return (
    <View>
      <Image source={{ uri: props.image }} style={styles.avatar} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    color: "#b0202c",
  },
  name: {
    color: "#ff5e81",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default User;
