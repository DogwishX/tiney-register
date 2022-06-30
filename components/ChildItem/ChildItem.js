import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { updateSignedInAt } from "../../data/children";
import useToggle from "../../hooks/useToggle";
import StyledText from "../StyledText/StyledText";

const styles = StyleSheet.create({
  childContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
    margin: "auto",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#1F1F24",
  },

  infoContainer: {
    flex: 1,
    flexDirection: "row",
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  textContainer: {
    marginLeft: 16,
  },

  name: {
    fontSize: 20,
    color: "#A2A1CA",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 100,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    elevation: 3,
    backgroundColor: "#DA5E70",
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    padding: 0,
  },

  signOutBtn: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "transparent",
    borderColor: "#DA5E70",
  },

  signOutText: {
    color: "#DA5E70",
  },
});

export default function ChildItem({ childDetails, handleStorageUpdate }) {
  const { name, profilePic, signedInAt } = childDetails;
  const [isSignedIn, toggleIsSignedIn] = useToggle(Boolean(signedInAt));
  let timeString;

  if (signedInAt) {
    const signedInDate = new Date(signedInAt);
    timeString = `${addPad0(signedInDate.getHours())}:${addPad0(
      signedInDate.getMinutes()
    )}`;
  }

  return (
    <View style={styles.childContainer}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.image}
          testID="childImg"
          source={profilePic}
        ></Image>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <StyledText style={styles.status} testID="childStatus">
            {isSignedIn ? `Signed in at ${timeString}` : "Signed Out"}
          </StyledText>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isSignedIn && styles.signOutBtn]}
        testID="signInOutBtn"
        onPress={handlePress}
      >
        <Text style={[styles.buttonText, isSignedIn && styles.signOutText]}>
          {isSignedIn ? "Sign Out" : "Sign In"}
        </Text>
      </TouchableOpacity>
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
