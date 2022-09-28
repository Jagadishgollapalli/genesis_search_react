import React from "react";
import SearchUser from "./SearchUser";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>AUDIT TRAIL</h1>
      </div>
      <div className="user-search">
        <SearchUser />
      </div>
    </>
  );
}

export default App;
