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


/* A cleaner approach, Instead of storing the entire text in state, store a boolean and derive the text from it:

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      Status: {isOn ? "ON" : "OFF"}
    </button>
  );
}
*/