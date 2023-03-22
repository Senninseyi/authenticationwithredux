import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window")
export const globalstyles = StyleSheet.create({
    textInput: {
        backgroundColor: "white",
        height: height / 16,
        paddingLeft: 20,
        borderRadius: height / 70,
        borderColor: "black",
        borderWidth: 1,
    }
})