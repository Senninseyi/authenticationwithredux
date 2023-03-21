import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {CustomButton} from "../component/button/custombutton";

const Homescreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={styles.screen}>
      <CustomButton
        onPress={() => navigation.navigate("Profile")}
      >
          Go to profile
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
      gap: 10,
    width: "100%",
  },
});

export { Homescreen };
