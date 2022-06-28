import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function ChildItem({ childDetails }) {
  const { name, profilePic, signedInAt } = childDetails;
  const timeString =
    signedInAt && `${signedInAt.getHours()}:${signedInAt.getMinutes()}`;

  return (
    <View>
      <Text>{name}</Text>
      <Image testID="childImg" source={profilePic}></Image>
      <Text testID="childStatus">
        {!signedInAt ? "Signed Out" : `Signed in at ${timeString}`}
      </Text>
    </View>
  );
}
