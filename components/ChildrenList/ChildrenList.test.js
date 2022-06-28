import { render } from "react-dom/cjs/react-dom.production.min";
import children from "../../data/children";
import ChildrenList from "./ChildrenList";

describe("Render elements", () => {
  test("Render name", () => {
    const ChildrenList = render(<ChildrenList list={children} />);
  });
});
