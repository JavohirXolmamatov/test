import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100dvh", height: "100dvh" }}>
      <h1 style={{ textAlign: "center" }}>Test</h1>
      <iframe src="/Test_OT.txt" width="100%" height="100%"></iframe>
    </div>
  );
}

export default App;
