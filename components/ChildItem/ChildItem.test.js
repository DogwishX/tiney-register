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

  it("displays the child's picture", () => {
    const { getByTestId } = TestComponent();
    const imageSource = getByTestId("childImg");
    expect(imageSource).toBeTruthy();
  });
});
