import ChildItem from "./ChildItem";
import { render } from "@testing-library/react-native";

function TestComponent(details) {
  const { getByText, getByTestId } = render(
    <ChildItem
      childDetails={details || { name: "Danny", image: "@assets/chibi.jpg" }}
    />
  );

  return { getByText, getByTestId };
}

describe("Render elements", () => {
  it("displays the child's name", () => {
    const { getByText } = TestComponent();
    const name = getByText("Danny").props.children;
    expect(name).toBe("Danny");
  });

  it("creates the child's picture element", () => {
    const { getByTestId } = TestComponent();
    const img = getByTestId("childImg");
    expect(img).toBeTruthy();
  });

  it("displays signed out status", () => {
    const { getByTestId } = TestComponent();
    const status = getByTestId("childStatus").props.children;
    expect(status).toBe("Signed Out");
  });

  it("displays signed in status", () => {
    const now = new Date(Date.now());
    const { getByTestId } = TestComponent({
      name: "Danny",
      image: "@assets/chibi.jpg",
      signedInAt: now,
    });

    const status = getByTestId("childStatus").props.children;
    expect(status).toBe(`Signed in at ${now.getHours()}:${now.getMinutes()}`);
  });
});
