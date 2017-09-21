import React from "react";
import "./App.css";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }
  update = () => {
    this.setState({
      isOn: !this.state.isOn
    }, () => {
      this.props.update(this.state.isOn);
    });
  }

  render() {
    const switchState = this.state.isOn ? "switch on" : "switch off";

    return (
      <div className="text">
        <div className={switchState} onClick={this.update} />
        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider round" onClick={this.update} />
        </label> */}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cName: "btn btn-danger",
      mood: false
    };

  }

  updateMood = (mood) => {
    if (mood === true) {
      this.setState({
        cName: "btn btn-success",
        mood: true
      });
    } else {
      this.setState({
        cName: "btn btn-danger",
        mood: false
      });
    }
  }

  render() {
    let appClass = null;
    if (this.state.cName === "btn btn-danger") {
      appClass = "app app-danger";
    } else {
      appClass = "app app-success";
    }

    return (
      <div className={appClass}>
        <Switch isOn={this.state.mood} update={this.updateMood} />
      </div>
    );
  }
}

export default App;
