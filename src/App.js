import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button onClick={() => window.analytics.track("Payment")}>Pay!!</button>
    </div>
  );
}

export default App;
