import ChildItem from "../ChildItem/ChildItem";
import { ScrollView, View } from "react-native";

export default function ChildrenList({ childrenList }) {
  return (
    <View>
      {childrenList.map((child, index) => (
        <ChildItem key={index} childDetails={child} />
      ))}
    </View>
  );
}
