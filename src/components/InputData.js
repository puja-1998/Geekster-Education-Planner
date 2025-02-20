// InputData.js
import { useState } from "react";
import "./InputData.css";

export default function InputData({ onAdd, entries, setEntries }) {
  const [text, setText] = useState("");
  const [hour, setHour] = useState("");


  const handleSubmit = () => {
    onAdd(text, hour);
    setText(""); // Clear input
    setHour("");
  };


  const incrementHour = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].hours += 1;
    setEntries(updatedEntries);
  };


  const decrementHour = (index) => {
    const updatedEntries = [...entries];
    if (updatedEntries[index].hours > 0) {
      updatedEntries[index].hours -= 1;
    }
    setEntries(updatedEntries);
  };


  return (
    <div>
      <div className="btns">
        <input
          type="text"
          placeholder="Subject"
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hour"
          className="num-input"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <button className="Add-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>

      {/* Display added items */}
      <div className="input-data">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <p>{entry.subject}</p>
            <p>{entry.hours} Hours</p>
            <button onClick={() => incrementHour(index)} className="incbtn">+</button>
            <button onClick={() => decrementHour(index)} className="decbtn">-</button>
          </div>
        ))}
      </div>
    </div>
  );
}
