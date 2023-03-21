import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profilescreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={styles.screen}>
      <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
        Profilescreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export { Profilescreen };
