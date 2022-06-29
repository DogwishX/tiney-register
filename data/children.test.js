import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAllChildren,
  children,
  updateChildrenData,
  updateSignedInAt,
} from "./children";

describe("when user retrieves data from AsyncStorage", () => {
  it("checks if Async Storage is used", async () => {
    await getAllChildren();
    expect(AsyncStorage.getItem).toBeCalledWith("children");
  });

  it("should return an array of objects when data is found", async () => {
    await updateChildrenData();
    expect(await getAllChildren()).toStrictEqual(children);
  });
});

describe("when user updates data", () => {
  it("adds a child signedInAt property", async () => {
    await updateChildrenData([
      { name: "Danny", profilePic: require("../assets/chibi.jpg") },
    ]);

    await updateSignedInAt("Danny");
    const children = await getAllChildren();
    const currentChild = children.find(({ name }) => name === "Danny");

    expect(currentChild.signedInAt).toBeTruthy();
  });

  it("deletes signedInAt property", async () => {
    await updateChildrenData([
      {
        name: "Danny",
        profilePic: require("../assets/chibi.jpg"),
        signedInAt: new Date(Date.now()),
      },
    ]);

    await updateSignedInAt("Danny", true);

    expect(await getAllChildren()).toStrictEqual([
      {
        name: "Danny",
        profilePic: require("../assets/chibi.jpg"),
      },
    ]);
  });
});
