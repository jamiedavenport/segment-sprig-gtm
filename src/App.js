import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.analytics.identify("test", {
      firstName: "Yaz",
      lastName: "Kaya",
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => window.analytics.track("Payment")}>Pay!!</button>
    </div>
  );
}

export default App;
