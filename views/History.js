import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "../components/StyledText/StyledText";
import Calendar from "../components/Calendar/Calendar";
import dayjs from "dayjs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    minHeight: "100%",
    backgroundColor: "#0D0D0D",
  },
});

export default function History() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <View style={styles.container}>
      <StyledText>{selectedDate.format()}</StyledText>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </View>
  );
}
