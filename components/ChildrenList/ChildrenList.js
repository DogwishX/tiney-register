import { StyleSheet, ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import { getAllChildren } from "../../data/children";
import ChildItem from "../ChildItem/ChildItem";
import StyledText from "../StyledText/StyledText";

const styles = StyleSheet.create({
  childrenListLength: {
    textAlign: "left",
    paddingVertical: 15,
    paddingLeft: 15,
    fontWeight: "600",
  },
});

export default function ChildrenList() {
  const [childrenList, setChildrenList] = useState([]);

  useEffect(() => {
    (async () => setChildrenList(await getAllChildren()))();
  }, []);

  return (
    <ScrollView>
      <StyledText style={styles.childrenListLength}>
        You have {childrenList.length} children expected in today
      </StyledText>
      {childrenList.map((child, index) => (
        <ChildItem key={index} childDetails={child} />
      ))}
    </ScrollView>
  );
}
