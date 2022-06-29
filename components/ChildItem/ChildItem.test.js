import ChildItem from "./ChildItem";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import {
  getAllChildren,
  updateChildrenData,
  updateSignedInAt,
} from "../../data/children";

function TestComponent(details) {
  const { getByText, getByTestId, getByRole } = render(
    <ChildItem
      childDetails={
        details || {
          name: "Danny",
          profilePic: render("../../assets/chibi.jpg"),
        }
      }
    />
  );

  return { getByText, getByTestId, getByRole };
}

describe("Render elements", () => {
  it("displays the child's name", () => {
    const { getByText } = TestComponent();
    const nameText = getByText("Danny").props.children;
    expect(nameText).toBe("Danny");
  });

  it("creates the child's picture element", () => {
    const { getByTestId } = TestComponent();
    const img = getByTestId("childImg");
    expect(img).toBeTruthy();
  });

  it("displays signed out status", () => {
    const { getByTestId } = TestComponent();
    const statusText = getByTestId("childStatus").props.children;
    expect(statusText).toBe("Signed Out");
  });

  it("displays signed in status", () => {
    const now = new Date(Date.now());
    const { getByTestId } = TestComponent({
      name: "Danny",
      profilePic: render("../../assets/chibi.jpg"),
      signedInAt: now,
    });

    const statusText = getByTestId("childStatus").props.children;
    expect(statusText).toBe(
      `Signed in at ${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`
    );
  });

  it("displays sign in button", () => {
    const { getByText } = TestComponent();
    const button = getByText("Sign In");
    expect(button).toBeTruthy();
  });

  it("displays sign out button", () => {
    const { getByText } = TestComponent({
      name: "Danny",
      profilePic: render("../../assets/chibi.jpg"),
      signedInAt: new Date(Date.now()),
    });
    const button = getByText("Sign Out");

    expect(button).toBeTruthy();
  });
});

// Interactivity
describe("When user taps button", () => {
  it("displays 'Signed in at ...' when signed in", () => {
    const { getByTestId } = TestComponent();

    const button = getByTestId("signInOutBtn");
    fireEvent.press(button);

    const now = new Date(Date.now());

    const statusText = getByTestId("childStatus").props.children;
    expect(statusText).toBe(
      `Signed in at ${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}`
    );
  });

  it("displays 'Signed out' when signed out", () => {
    const { getByTestId } = TestComponent({
      name: "Danny",
      profilePic: render("../../assets/chibi.jpg"),
      signedInAt: new Date(Date.now()),
    });

    const button = getByTestId("signInOutBtn");
    fireEvent.press(button);

    const statusText = getByTestId("childStatus").props.children;
    expect(statusText).toBe("Signed Out");
  });
});
