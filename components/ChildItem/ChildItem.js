import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useEffect } from "react/cjs/react.production.min";
import useToggle from "../../hooks/useToggle";

export default function ChildItem({ childDetails }) {
  const { name, profilePic, signedInAt } = childDetails;
  const [isSignedIn, toggleIsSignedIn] = useToggle(Boolean(signedInAt));

  const timeString =
    signedInAt && `${signedInAt.getHours()}:${signedInAt.getMinutes()}`;

  return (
    <View>
      <Text>{name}</Text>
      <Image testID="childImg" source={profilePic}></Image>
      <Text testID="childStatus">
        {isSignedIn ? `Signed in at ${timeString}` : "Signed Out"}
      </Text>

      <Button
        testID="signInOutBtn"
        title={isSignedIn ? "Sign Out" : "Sign In"}
        onPress={handlePress}
      />
    </View>
  );

  function handlePress() {
    if (isSignedIn) return toggleIsSignedIn();

    toggleIsSignedIn();
    childDetails.signedInAt = new Date(Date.now());
  }
}
