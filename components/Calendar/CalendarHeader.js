import { View, StyleSheet } from "react-native";
import StyledText from "../StyledText/StyledText";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  headerText: {
    fontSize: 24,
    paddingHorizontal: 10,
    color: "white",
  },
});

export default function CalendarHeader({ headerDate, setHeaderDate }) {
  return (
    <View style={styles.container}>
      <Entypo
        name="chevron-left"
        size={24}
        color="white"
        onPress={() => showNextMonth(false)}
      />
      <StyledText style={styles.headerText}>
        {headerDate.format("MMMM YYYY")}
      </StyledText>
      <Entypo
        name="chevron-right"
        size={24}
        color="white"
        onPress={showNextMonth}
      />
    </View>
  );

  function showNextMonth(isNextSelected = true) {
    setHeaderDate(getNewMonth(headerDate, isNextSelected));
  }

  function getNewMonth(previousDate, isNextSelected) {
    // If user clicked 'previous' and month is January, decrease year by one and change month to 11
    if (!isNextSelected && previousDate.month() === 0)
      return previousDate.set("year", previousDate.year() - 1).set("month", 11);

    // If user clicked 'next' and month is December, add year and change month to 0
    if (isNextSelected && previousDate.month() === 11)
      return previousDate.set("year", previousDate.year() + 1).set("month", 0);

    return previousDate.add(isNextSelected ? 1 : -1, "month");
  }
}
