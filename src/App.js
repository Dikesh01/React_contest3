import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
