import { StyleSheet, Text, View, Button, Image } from "react-native";
import ChildrenList from "./components/ChildrenList/ChildrenList";

export default function App() {
  return (
    <View style={styles.container}>
      <ChildrenList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#0D0D0D",
  },
});
