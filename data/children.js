import AsyncStorage from "@react-native-async-storage/async-storage";

const children = [
  { name: "Danny", profilePic: require("../assets/chibi.jpg") },
  { name: "Johnny", profilePic: require("../assets/chibi1.jpg") },
  { name: "Maggie", profilePic: require("../assets/chibi2.jpg") },
  { name: "Bobby", profilePic: require("../assets/chibi3.jpg") },
  { name: "Samantha", profilePic: require("../assets/chibi4.jpg") },
  { name: "Riven", profilePic: require("../assets/chibi5.jpg") },
];

async function getAllChildren() {
  const value = await AsyncStorage.getItem("children");
  if (value !== null) {
    return JSON.parse(value);
  }
}

async function updateChildrenData(arr) {
  await AsyncStorage.setItem("children", JSON.stringify(arr || children));
  return await AsyncStorage.getItem("children");
}

async function updateSignedInAt(name, removeSignedInAt = false) {
  const childrenStorage = await getAllChildren();
  const currentChildObj = childrenStorage.find((child) => child.name === name);

  removeSignedInAt
    ? delete currentChildObj.signedInAt
    : (currentChildObj.signedInAt = new Date(Date.now()));

  await updateChildrenData(childrenStorage);
}

export { getAllChildren, updateChildrenData, updateSignedInAt, children };
