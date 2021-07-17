import React, { Component } from "react";

export class MyBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {}

  render() {
    if (this.state.data === null) {
      return <div>Loading...</div>;
    }

    return <div>Loaded</div>;
  }
}

export default MyBrowser;
