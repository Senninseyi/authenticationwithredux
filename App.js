import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AppNavigation } from "./component/navigation/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
});
