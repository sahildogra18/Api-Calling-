import { useState } from "react";
import "./App.css";

import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
  function handleClick() {
    
  }
  return (
    <div className="cc">
      <h1>Weather Forecast</h1>
      <Input placeholder={"Select your city"} />
      <Button value="Here We GO" onClick={handleClick} />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
