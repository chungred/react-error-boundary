import React from "react";
import "./App.css";
import InputComp from "./Component/Input";
import ButtonComp from "./Component/Button";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <form style={{
          borderRadius: 4,
          padding: "5px 12px",
        }}>
          <InputComp type="text" name="username" placeholder="Input Name" />
          <InputComp type="text" name="username" placeholder="Input Address" />
          <InputComp type="text" name="username" placeholder="Input Email" />
          <div className="footer">
            <ButtonComp name="submit" />
          </div>
        </form> 
      </div>
    </div>
  );
};

export default App;
