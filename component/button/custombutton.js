import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { borderRadius, primarycolor } from "../../constants/constants";

const { height, width } = Dimensions.get("window");
export const CustomButton = ({ children, onPress, customStyle }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.button, customStyle]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primarycolor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: borderRadius,
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 3.0,
      width: 0,
    },
  },
  buttonText: {
    color: "white",
    letterSpacing: 0.25,
    fontFamily: "Montserrat_600SemiBold",
  },
});
