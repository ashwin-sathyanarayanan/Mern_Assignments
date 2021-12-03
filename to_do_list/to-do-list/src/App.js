import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setItemArr([...itemArr, item]);
    setItem("");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type = "text"
          onChange={(e) => setItem(e.target.value)}
          value = {item}
        />
        <button type = "submit">Submit Item</button>
      </form>

      <h2>Items:</h2>
      {itemArr.map((item, index) => (
        <div style = {{display: "flex", justifyContent: "center"}}>
          <ul>{item}</ul>
          <button style = {{marginLeft: "15px"}}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
