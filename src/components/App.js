import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import "../_main.scss";
const App = () => {
  return (
    <div className="app__main row">
      <div className="column-left">
        <Header />
      </div>
      <div className="double-column">
        <Content />
      </div>
    </div>
  );
};

export default App;
