import React from 'react'
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native"

export const CustomButton = ({children, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: "white"
    }
})