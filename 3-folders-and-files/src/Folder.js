import React, { Component } from "react";

export class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  render() {
    const children = this.props.children;

    return <div>Folder</div>;
  }
}

export default Folder;
