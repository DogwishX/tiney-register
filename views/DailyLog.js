import { StyleSheet, Text, View, Button } from "react-native";
import useToggle from "../hooks/useToggle.js";

export default function DailyLog() {
  const [isSignedIn, toggleIsSignedIn] = useToggle(false);

  return (
    <View>
      <Text style={styles.title}>Daily Log</Text>
      <Button
        title={isSignedIn ? "Sign Out" : "Sign In"}
        onPress={toggleIsSignedIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    fontSize: 24,
  },
});
