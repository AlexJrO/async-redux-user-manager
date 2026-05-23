import React, {
  useEffect
} from "react";

import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";

import styles from "../styles";

const UserListScreen = ({
  users,
  loading,
  error,
  fetchUsers,
  deleteUser
}) => {

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" />
    );
  }

  return (
    <View style={styles.container}>

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      <FlatList
        data={users}

        keyExtractor={(item) =>
          item.login.uuid
        }

        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text>
              {item.name.first}
              {" "}
              {item.name.last}
            </Text>

            <Button
              title="Delete"
              onPress={() =>
                deleteUser(
                  item.login.uuid
                )
              }
            />

          </View>
        )}
      />

    </View>
  );
};

export default UserListScreen;