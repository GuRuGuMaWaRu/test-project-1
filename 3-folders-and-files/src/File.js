import React, { Component } from "react";

export class File extends Component {
  render() {
    const { mime, name, type } = this.props;

    return <div>{name}</div>;
  }
}

export default File;
