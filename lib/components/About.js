import React from "react";
import {Link} from "react-router";

export default React.createClass({
  componentDidMount() {
  console.log(this.props.params.name);
},
  render() {
    return (
      <div className="about">
        <Link to="/">Welcome to the about page!</Link>
      </div>
    );
  }
});
