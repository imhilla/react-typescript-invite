import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

interface ISstate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<ISstate["people"]>([]);

  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
