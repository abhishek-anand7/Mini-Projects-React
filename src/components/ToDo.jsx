import { useState } from "react";

export function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <input
        type="text"
        placeholder="Type your toDo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTask(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>

      {task && (
        <>
          <div>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => {
                setIsCompleted(!isCompleted);
              }}
            />
          </div>

          <span
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {task}
          </span>
        </>
      )}
    </>
  );
}
