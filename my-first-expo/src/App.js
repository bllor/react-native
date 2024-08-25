import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: "black", color: "white", fontSize: 20 }}>
        hi react-native
      </Text>
      <Text style={styles.errorText}>error text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    backgroundColor: "black",
    color: "blue",
    fontSize: 18,
  },
});
