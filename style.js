import { Dimensions, StyleSheet } from "react-native";
import {
  borderRadius,
  primarycolor,
  secondarycolor,
} from "./constants/constants";

const { height, width } = Dimensions.get("window");
export const globalstyles = StyleSheet.create({
  textInput: {
    backgroundColor: secondarycolor,
    height: height / 15,
    paddingLeft: 20,
    borderRadius: borderRadius,
    borderColor: primarycolor,
  },
});
