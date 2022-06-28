import { useState } from "react";

export default function useToggle(defaultBoolean) {
  const [state, setState] = useState(defaultBoolean);

  function toggle() {
    setState(!state);
  }

  return [state, toggle];
}
