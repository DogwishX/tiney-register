import { StyleSheet, Text } from "react-native";

export default function StyledText({ children, style, testID, onPress }) {
  return (
    <Text style={[styles.text, style]} testID={testID} onPress={onPress}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#767788",
    fontSize: 16,
  },
});
