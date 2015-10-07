import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import About from "./components/About";


let RouterContainer = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <App />,
  document.getElementById("react-root")
);
