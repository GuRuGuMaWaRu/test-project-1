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
    const { name, type, children, level } = this.props;

    return (
      <>
        <div
          className="folder"
          style={{ marginLeft: `${(level - 1) * 2}rem` }}
          onClick={this.handleExpansion}
        >
          {this.state.expanded && "+"}
          {name}
        </div>
        {this.state.expanded &&
          children.map((item, idx) => {
            if (item.type === "FOLDER") {
              return <Folder key={item.name} level={level + 1} {...item} />;
            } else {
              return <File key={item.name} level={level + 1} {...item} />;
            }
          })}
      </>
    );
  }
}

export default Folder;
