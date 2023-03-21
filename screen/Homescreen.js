import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Homescreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={styles.screen}>
      <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
        Homescreen
      </Text>
      <Button
        title="Goto profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export { Homescreen };
