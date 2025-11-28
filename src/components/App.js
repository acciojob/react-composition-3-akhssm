import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}

      <Tooltip text="This is a tooltip message">
        <h2 className="tooltip">Hover over me</h2>
      </Tooltip>

      <hr />

      <Tooltip text="This is another tooltip example">
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
