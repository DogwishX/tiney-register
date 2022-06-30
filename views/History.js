import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import dayjs from "dayjs";

import StyledText from "../components/StyledText/StyledText";
import Calendar from "../components/Calendar/Calendar";
import ChildrenList from "../components/ChildrenList/ChildrenList";
import { filterChildrenByDate } from "../data/children";

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
  const [childrenList, setChildrenList] = useState([]);

  useEffect(() => {
    (async () =>
      setChildrenList(
        await filterChildrenByDate(selectedDate, "signedInAt")
      ))();
  });

  return (
    <View style={styles.container}>
      <StyledText>{selectedDate.format()}</StyledText>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleChange={setSelectedDate}
      />
      {childrenList.length === 0 ? (
        <StyledText>No children signed in this day.</StyledText>
      ) : (
        <ScrollView>
          <ChildrenList childrenList={childrenList} />
        </ScrollView>
      )}
    </View>
  );
}
