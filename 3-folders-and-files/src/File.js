import React, { Component } from "react";

export class File extends Component {
  render() {
    const { mime, name, type, level } = this.props;

    return <div style={{ marginLeft: `${(level - 1) * 2}rem` }}>{name}</div>;
  }
}

export default File;
