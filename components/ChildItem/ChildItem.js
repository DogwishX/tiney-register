import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function ChildItem({ childDetails }) {
  const { name, image, signedIn } = childDetails;
  return (
    <View>
      <Text>{name}</Text>
      <Image testID="childImg" source={{ uri: image }}></Image>
    </View>
  );
}
