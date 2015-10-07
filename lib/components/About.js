import React from "react";
import {Link} from "react-router";

export default React.createClass({
  componentDidMount() {
  console.log(this.props.params.name);
},
  render() {
    return (
      <div className="about">
      </div>
    );
  }
});
