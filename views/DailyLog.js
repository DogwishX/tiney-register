import { StyleSheet, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getAllChildren } from "../data/children";
import StyledText from "../components/StyledText/StyledText";
import ChildrenList from "../components/ChildrenList/ChildrenList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#0D0D0D",
  },

  childrenListLength: {
    textAlign: "left",
    paddingVertical: 15,
    paddingLeft: 15,
    fontWeight: "600",
  },
});

export default function DailyLog() {
  const [childrenList, setChildrenList] = useState([]);

  useEffect(() => {
    (async () => setChildrenList(await getAllChildren()))();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StyledText style={styles.childrenListLength}>
        You have {childrenList.length} children expected in today
      </StyledText>
      <ChildrenList childrenList={childrenList} />
    </ScrollView>
  );
}
