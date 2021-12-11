import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition() { /* ... */ }
  function back() { /* ... */ }

  return { mode, transition, back };
};