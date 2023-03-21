import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loginscreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={styles.screen}>
      <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
        Loginscreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 500,
  },
});

export { Loginscreen };
