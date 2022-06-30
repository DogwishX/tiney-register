import { StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import {
  filterChildrenByDate,
  getAllChildren,
  updateChildrenData,
} from "../data/children";
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

export default function DailyLog({ childrenList, setChildrenList }) {
  const [filteredChildrenList, setFilteredChildrenList] = useState([]);

  useEffect(() => {
    (async () => {
      setChildrenList(await getAllChildren());
    })();
  }, []);

  useEffect(() => {
    const today = new Date(Date.now());
    setFilteredChildrenList(
      filterChildrenByDate(childrenList, today, "expectedDate")
    );
  }, [childrenList]);

  return (
    <ScrollView style={styles.container}>
      <StyledText style={styles.childrenListLength}>
        You have {filteredChildrenList.length} children expected in today
      </StyledText>
      <ChildrenList
        childrenList={filteredChildrenList}
        setChildrenList={setChildrenList}
      />
    </ScrollView>
  );
}
