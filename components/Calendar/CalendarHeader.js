import { View } from "react-native";
import StyledText from "../StyledText/StyledText";

export default function CalendarHeader({ headerDate, setHeaderDate }) {
  return (
    <View>
      <StyledText onPress={() => showNextMonth(false)}>{"<"}</StyledText>
      <StyledText>{headerDate.format("MMMM YYYY")}</StyledText>
      <StyledText onPress={showNextMonth}>{">"}</StyledText>
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
