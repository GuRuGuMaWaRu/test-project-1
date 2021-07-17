import React, { Component } from "react";
import File from "./File";
export class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleExpansion() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const { name, type, children } = this.props;

    return (
      <>
        <div className="folder" onClick={this.handleExpansion}>
          {name}
        </div>
        {this.state.expanded &&
          children.map((item, idx) => {
            if (item.type === "FOLDER") {
              return <Folder key={item.name} {...item} />;
            }

            if (item.type === "FILE") {
              return <File key={item.name} {...item} />;
            }
          })}
      </>
    );
  }
}

export default Folder;
