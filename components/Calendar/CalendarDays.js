import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "../StyledText/StyledText";

const styles = StyleSheet.create({
  container: { backgroundColor: "#181A1B", elevation: 5, width: "80%" },
  abbreviations: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  abbreviationsText: { color: "white" },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: { minWidth: 40, textAlign: "center", padding: 10 },
  dayActive: { backgroundColor: "#422840", borderRadius: 50 },
});

export default function CalendarDays({
  selectedDate,
  headerDate,
  handleChange,
}) {
  const calendarRows = useMemo(
    () => createCalendarRows(headerDate),
    [headerDate]
  );

  return (
    <View style={styles.container}>
      <CalendarDaysAbbreviations calendarRows={calendarRows} />
      <CalendarDayRows
        calendarRows={calendarRows}
        handleChange={handleChange}
        selectedDate={selectedDate}
      />
    </View>
  );
}

function CalendarDaysAbbreviations({ calendarRows }) {
  return (
    <View style={styles.abbreviations}>
      {calendarRows[0].map(({ value }, index) => (
        <StyledText style={styles.abbreviationsText} key={index}>
          {value.format("dd")}
        </StyledText>
      ))}
    </View>
  );
}

function CalendarDayRows({ calendarRows, handleChange, selectedDate }) {
  return (
    <View>
      {calendarRows.map((rowDays, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {rowDays.map(({ text, value }, dayIndex) => {
            const isCurrentDaySelected =
              value.toString() === selectedDate.toString();

            return (
              <StyledText
                style={[styles.day, isCurrentDaySelected && styles.dayActive]}
                key={dayIndex}
                onPress={selectDate(value)}
              >
                {text}
              </StyledText>
            );
          })}
        </View>
      ))}
    </View>
  );

  function selectDate(date) {
    return () => handleChange(date);
  }
}

function createCalendarRows(selectedDate) {
  const daysArr = createDaysArr(selectedDate);
  const rowLength = 7;
  const rowsArr = splitArrayToRows(daysArr, rowLength);

  return rowsArr;
}

function createDaysArr(date) {
  const daysInCalendar = 35;
  const daysInMonth = date.daysInMonth();
  const daysMissing = daysInCalendar - daysInMonth;
  const daysArr = [];

  createCurrentMonthDays(date, daysInMonth, daysArr);
  addPreviousMonthMissingDays(date, daysArr, daysMissing);
  addNextMonthMissingDays(date, daysArr);

  return daysArr;
}

function createCurrentMonthDays(date, daysInMonth, daysArr) {
  for (let i = 0; i < daysInMonth; i++) {
    daysArr.push(createDay(date, i + 1));
  }
}

function createDay(date, dayOfMonth) {
  return {
    text: String(dayOfMonth),
    value: date.clone().set("date", dayOfMonth),
  };
}

function addPreviousMonthMissingDays(date, daysArr, daysMissing) {
  const previousMonth = date.subtract(1, "month");

  for (let i = 0; i < Math.round(daysMissing / 2); i++) {
    daysArr.unshift(createDay(previousMonth, previousMonth.daysInMonth() - i));
  }
}

function addNextMonthMissingDays(date, daysArr) {
  const nextMonth = date.add(1, "month");
  const daysMissing = 35 - daysArr.length;

  for (let i = 0; i < daysMissing; i++) {
    daysArr.push(createDay(nextMonth, i + 1));
  }
}

function splitArrayToRows(arrayToSplit, rowLength) {
  const splitArr = [];

  for (let i = 0; i < arrayToSplit.length; i += rowLength) {
    splitArr.push(arrayToSplit.slice(i, i + rowLength));
  }

  return splitArr;
}
