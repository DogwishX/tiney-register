import { StyleSheet, Text } from "react-native";

export default function StyledText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#767788",
    fontSize: 16,
  },
});
