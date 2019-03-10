import React from "react";
import ReactDOM from "react-dom";
import * as Pills from "./pill";

import "@fortawesome/fontawesome-free/css/all.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
      <Pills.Pill />
      <p></p>
      <Pills.Pill text="500" prefix="R" />
      </div>
      )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
