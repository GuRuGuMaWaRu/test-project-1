import React, { Component } from "react";

export class File extends Component {
  render() {
    const { mime, name, type } = this.props;

    return (
      <div>
        Mime: {mime}, Name: {name}, Type: {type}
      </div>
    );
  }
}

export default File;
