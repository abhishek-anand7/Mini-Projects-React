import { useState } from "react";

export function ToggleButton() {
  const [text, setText] = useState("Status: OFF");
  return (
    <button
      onClick={() =>
        setText(text === "Status: OFF" ? "Status: ON" : "Status: OFF")
      }
    >
      {text}
    </button>
  );
}
