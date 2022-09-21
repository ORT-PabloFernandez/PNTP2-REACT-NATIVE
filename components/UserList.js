import React from "react";
import { View, Text } from "react-native";
import User from "./User";

const UserList = (props) => {
  return (
    <View>
      {props.items.map((user) => (
        <User
          id={user["Object Id"]}
          image={user.Picture}
          name={user["Display name"]}
          title={user.Title}
        />
      ))}
    </View>
  );
};

export default UserList;
