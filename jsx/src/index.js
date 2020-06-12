// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
  const buttonText = { text: "Click me" };
  const labelText = "name";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter {labelText}:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// take react component, show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
