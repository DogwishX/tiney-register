import ChildItem from "../ChildItem/ChildItem";
import { ScrollView, View } from "react-native";

export default function ChildrenList({ childrenList, setChildrenList }) {
  return (
    <View>
      {childrenList.map((child, index) => (
        <ChildItem
          key={index}
          childDetails={child}
          setChildrenList={setChildrenList}
        />
      ))}
    </View>
  );
}
