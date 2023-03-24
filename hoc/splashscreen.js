import { ActivityIndicator, Text, View } from "react-native";
import { primarycolor } from "../constants/constants";

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
      <ActivityIndicator size="large" color={primarycolor} />
      <Text>Loading Content</Text>
    </View>
  );
}

export default SplashScreen;
