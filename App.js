import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import DailyLog from "./views/DailyLog";

export default function App() {
  return <View style={styles.container}></View>;
}

function handleClick() {
  alert("clicked");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
