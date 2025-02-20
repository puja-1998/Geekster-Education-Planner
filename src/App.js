// App.js
import { useState } from "react";
import "./App.css";
import InputData from "./components/InputData";

function App() {
  const [entries, setEntries] = useState([]);

  const handleAdd = (text, hour) => {
    if (!text || !hour) return; // Prevent empty input
    setEntries([...entries, { subject: text, hours: parseInt(hour, 10) }]);
  };

  return (
    <div className="container">
      <h1>Geekster Education Planner</h1>
      <InputData onAdd={handleAdd} entries={entries} setEntries={setEntries} />
    </div>
  );
}

export default App;
