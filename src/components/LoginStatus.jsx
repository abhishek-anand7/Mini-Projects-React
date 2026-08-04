import { useState } from "react";

export function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <p>{isLogin ? "Welcome, Abhishek" : "Welcome, Guest"}</p>
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </>
  );
}
