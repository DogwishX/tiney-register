import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ChildItem from "./components/ChildItem/ChildItem";
import DailyLog from "./views/DailyLog";

export default function App() {
  return (
    <View style={styles.container}>
      <ChildItem
        childDetails={{
          name: "Danny",
          profilePic: require("./assets/chibi.jpg"),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
