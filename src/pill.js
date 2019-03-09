import React from "react";
import ReactDOM from "react-dom";

import "./pill.css";

export class Pill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      new: true,
      text: "not set",
      input: "",
      apiSendOk: false,
      apiWorking: false
    };

    this.toggleState = this.toggleState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.save = this.save.bind(this);
    this.onApiEnd = this.onApiEnd.bind(this);
  }

  toggleState() {
    this.setState({ new: false });
  }

  onChange(e) {
    console.log(e);
    this.setState({ input: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.save();
  }

  save() {
    this.setState({ apiWorking: true });
    this.setState({ text: this.state.input });
  }

  onApiEnd() {
    this.setState({ apiSendOk: true });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Let's stop this event.
      event.stopPropagation(); // Really this time.

      alert("Is it stopped?");
      // "Hahaha, I'm gonna submit anyway!" - Chrome
    }
  }

  render() {
    let content = null;
    let icon = null;

    if (this.state.new == true) {
      content = (
        <>
          <i className="fas fa-plus" />
          <span onClick={this.toggleState}>Add</span>
        </>
      );
    }

    if (this.state.new == false) {
      // icon management
      if (!this.state.apiWorking) {
        icon = <i class="fas fa-arrow-circle-right" onClick={this.save} />;
      } else {
        icon = <i class="fas fa-asterisk spin" />;
      }

      if (this.state.apiSendOk) {
        icon = <i className="fas fa-check" />;
      }

      content = (
        <form onSubmit={this.onSubmit}>
          <input type="text" autoFocus onChange={this.onChange} />
          {icon}
        </form>
      );
    }

    return (
      <div className="wrapper">
        <div className="pill">{content}</div>
      </div>
    );
  }
}
