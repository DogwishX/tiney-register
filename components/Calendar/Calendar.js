import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";

export default function Calendar({
  selectedDate,
  setSelectedDate,
  handleChange,
}) {
  const [headerDate, setHeaderDate] = useState(selectedDate);
  return (
    <View>
      <CalendarHeader headerDate={headerDate} setHeaderDate={setHeaderDate} />
      <CalendarDays
        selectedDate={selectedDate}
        headerDate={headerDate}
        handleChange={handleChange}
      />
    </View>
  );
}
