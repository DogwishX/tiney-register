import { render } from "react-dom/cjs/react-dom.production.min";
import ChildItem from "./ChildItem";

describe("Render elements", () => {
  const { queryByText } = render(
    <ChildItem data={{ name: "Danny", profilePic: "../assets/chibi.jpg" }} />
  );
  test("if correct name is displayed", () => {
    expect(queryByText("Danny")).toBe(true);
  });
});
