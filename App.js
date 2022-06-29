import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import ChildrenList from "./components/ChildrenList/ChildrenList";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#0D0D0D",
  },

  header: {
    backgroundColor: "#151518",
    color: "#c8daf7",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 2,
    textAlign: "center",
    paddingVertical: 20,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="#151518" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>tiney register</Text>
        <ChildrenList />
      </SafeAreaView>
    </NavigationContainer>
  );
}
