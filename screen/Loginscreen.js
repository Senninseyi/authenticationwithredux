import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { globalstyles } from "../style";
import { CustomButton } from "../component/button/custombutton";
import { DismissKeyboard } from "../hoc/keyboardDismiss";
import { save } from "../hoc/secureStore";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/reducer/auth";

function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" color={"red"} />
    </View>
  );
}

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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.textViewcontainer}
        >
          <TextInput
            placeholder="username"
            selectionColor="red"
            style={globalstyles.textInput}
            value={formData.username}
            onChangeText={(username) => {
              setFormdata({
                ...formData,
                username: username,
              });
            }}
          />
          <TextInput
            placeholder="password"
            selectionColor="red"
            cursorColor="red"
            secureTextEntry={true}
            style={globalstyles.textInput}
            value={formData.password}
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
    height: 500,
  },
  textViewcontainer: {
    width: "100%",
    maxWidth: "90%",
    padding: 5,
    gap: 20,
  },
  signInbutton: {
    width: "100%",
    maxWidth: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  forgotpasswordContainer: {
    width: "100%",
    maxWidth: "90%",
    padding: 5,
    marginTop: 20,
  },
  forgotPassword: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
});

export { Loginscreen };
