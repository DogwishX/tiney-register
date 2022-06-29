import { StyleSheet, Text, View, Button, Image } from "react-native";
import {
  getAllChildren,
  updateChildrenData,
  updateSignedInAt,
} from "../../data/children";
import useToggle from "../../hooks/useToggle";

export default function ChildItem({ childDetails }) {
  const { name, profilePic, signedInAt } = childDetails;
  const [isSignedIn, toggleIsSignedIn] = useToggle(Boolean(signedInAt));

  const timeString =
    signedInAt &&
    `${addPad0(signedInAt.getHours())}:${addPad0(signedInAt.getMinutes())}`;

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

  async function handlePress() {
    // Sign out
    if (isSignedIn) {
      toggleIsSignedIn();
      await updateSignedInAt(name, true);
      return;
    }

    // Sign in
    toggleIsSignedIn();
    childDetails.signedInAt = new Date(Date.now());
    await updateSignedInAt(name);
  }
}

function addPad0(num) {
  return String(num).padStart(2, "0");
}
