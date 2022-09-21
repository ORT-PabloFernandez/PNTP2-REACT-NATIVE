import React from "react";
import { View, Text, FlatList } from "react-native";
import User from "./User";

const UserList = (props) => {
  return (
    <FlatList
      data={props.items}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => (
        <View key={item["Object Id"]}>
          <User
            id={item["Object Id"]}
            image={item.Picture}
            name={item["Display name"]}
            title={item.Title}
          />
        </View>
      )}
    />
  );
};

export default UserList;

// return (
//     <View>
//       {props.items.map((user) => (
//         <User
//           id={user["Object Id"]}
//           image={user.Picture}
//           name={user["Display name"]}
//           title={user.Title}
//         />
//       ))}
//     </View>
//   );
