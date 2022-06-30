import AsyncStorage from "@react-native-async-storage/async-storage";

const children = [
  {
    name: "Danny",
    profilePic: require("../assets/chibi.jpg"),
    expectedDate: new Date(Date.now()),
  },
  {
    name: "Johnny",
    profilePic: require("../assets/chibi1.jpg"),
    expectedDate: new Date(Date.now()),
  },
  {
    name: "Maggie",
    profilePic: require("../assets/chibi2.jpg"),
    expectedDate: new Date(Date.now()),
  },
  {
    name: "Bobby",
    profilePic: require("../assets/chibi3.jpg"),
    expectedDate: new Date(Date.now()),
  },
  {
    name: "Samantha",
    profilePic: require("../assets/chibi4.jpg"),
    expectedDate: new Date(Date.now()),
  },
  {
    name: "Riven",
    profilePic: require("../assets/chibi5.jpg"),
    expectedDate: new Date(Date.now()),
  },
  {
    name: "Riven",
    profilePic: require("../assets/chibi5.jpg"),
    expectedDate: new Date("2022-06-29T03:24:00"),
    signedInAt: new Date("2022-06-29T03:24:00"),
  },
];
const clearAsyncStorage = async () => {
  AsyncStorage.clear();
};

async function getAllChildren() {
  const value = await AsyncStorage.getItem("children");
  if (value === null) updateChildrenData();
  return JSON.parse(value);
}

async function updateChildrenData(arr) {
  await AsyncStorage.setItem("children", JSON.stringify(arr || children));
  return await AsyncStorage.getItem("children");
}

async function updateSignedInAt(name, removeSignedInAt = false) {
  const childrenInStorage = await getAllChildren();
  const currentChildObj = childrenInStorage.find(
    (child) => child.name === name
  );

  removeSignedInAt
    ? delete currentChildObj.signedInAt
    : (currentChildObj.signedInAt = new Date(Date.now()));

  await updateChildrenData(childrenInStorage);
}

function filterChildrenByDate(childrenList, date, property) {
  return childrenList.filter(
    (item) => item[property]?.slice(0, 10) === JSON.stringify(date).slice(1, 11)
  );
}

export {
  getAllChildren,
  updateChildrenData,
  updateSignedInAt,
  filterChildrenByDate,
  children,
};
