import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import { globalstyles } from "../style";
import { CustomButton } from "../component/button/custombutton";
import { DismissKeyboard } from "../hoc/keyboardDismiss";
import { save } from "../hoc/secureStore";
import { loginUser } from "../redux/reducer/auth";
import { primarycolor } from "../constants/constants";
import SplashScreen from "../hoc/splashscreen";

const Loginscreen = ({ navigation }) => {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const Signin = () => {
    setLoading(true);
    try {
      setFormdata({
        ...formData,
        username: formData.username,
        password: formData.password,
      });
      save("user", formData.username);
      dispatch(loginUser(formData));
      setLoading(false);
      console.log("Data", formData);
    } catch (error) {
      Alert.alert("Error", error);
    }
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <DismissKeyboard>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/icon.png")}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Text style={styles.title}>Redux Expo</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.textViewcontainer}
        >
          <TextInput
            placeholder="email"
            selectionColor={primarycolor}
            cursorColor={primarycolor}
            style={globalstyles.textInput}
            value={formData.username}
            keyboardType="email-address"
            keyboardAppearance="default"
            onChangeText={(username) => {
              setFormdata({
                ...formData,
                username: username,
              });
            }}
          />
          <TextInput
            placeholder="password"
            selectionColor={primarycolor}
            cursorColor={primarycolor}
            secureTextEntry={true}
            style={globalstyles.textInput}
            value={formData.password}
            keyboardType="default"
            keyboardAppearance="default"
            onChangeText={(password) => {
              setFormdata({
                ...formData,
                password: password,
              });
            }}
          />

          <CustomButton
            onPress={() => Signin()}
            customStyle={styles.signInbutton}
          >
            Sign In
          </CustomButton>
        </KeyboardAvoidingView>
        <View style={styles.forgotpasswordContainer}>
          <TouchableNativeFeedback
            onPress={() => Alert.alert("Alert", "forgot password")}
          >
            <Text style={styles.forgotPassword}>forgot password?</Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => Alert.alert("Alert", "forgot password")}
          >
            <Text style={[styles.forgotPassword, { color: primarycolor }]}>
              Create Account
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    maxWidth: "90%",
    marginVertical: 30,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
    fontFamily: "Montserrat_600SemiBold",
  },
  textViewcontainer: {
    width: "100%",
    maxWidth: "90%",
    padding: 5,
    gap: 20,
  },
  signInbutton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primarycolor,
    height: Dimensions.get("window").height / 15,
  },
  forgotpasswordContainer: {
    width: "100%",
    maxWidth: "90%",
    padding: 5,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  forgotPassword: {
    color: "black",
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    letterSpacing: 0.25
  },
});

export { Loginscreen };
