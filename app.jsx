
import React, { useState } from "react";
import Profile from "./components/Profile";

const App = () => {
  const [name, setName] = useState(); // ❌ Missing default value
  const [age, setAge] = useState(25);

  return (
    <div>
      <h1>React Debugging Demo</h1>
      <Profile age={age} />
      <button onClick={() => setName("Ahmed")}>Set Name</button>
    </div>
  );
};

export default App;
