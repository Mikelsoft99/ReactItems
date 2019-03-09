import React from "react";
import ReactDOM from "react-dom";
import * as Pills from "./pill";

import "@fortawesome/fontawesome-free/css/all.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Pills.Pill />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
