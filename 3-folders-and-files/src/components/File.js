import React, { Component } from "react";
import "../styles/File.css";

export class File extends Component {
  render() {
    const { name, level } = this.props;

    return (
      <div className="file" style={{ marginLeft: `${(level - 1) * 2}rem` }}>
        {name}
      </div>
    );
  }
}

export default File;
