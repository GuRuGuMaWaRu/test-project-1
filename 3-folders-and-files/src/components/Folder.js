import React, { Component } from "react";

import "../styles/Folder.css";
import File from "./File";

export class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: this.props.selectedPath ? true : false,
    };
    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleExpansion() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const { name, children, level, selectedPath = null } = this.props;
    let selectedFolder = null;
    let path = null;

    if (selectedPath) {
      const slashIndex = selectedPath.indexOf("/", 1);
      selectedFolder = selectedPath.slice(1, slashIndex);
      path = selectedPath.slice(selectedFolder.length + 1);
    }

    return (
      <>
        <div
          className="folder"
          style={{ marginLeft: `${(level - 1) * 2}rem` }}
          onClick={this.handleExpansion}
        >
          {this.state.expanded && "+ "}
          {name}
        </div>
        {this.state.expanded &&
          children.map(item => {
            if (item.type === "FOLDER") {
              return (
                <Folder
                  key={item.name}
                  level={level + 1}
                  selectedPath={selectedFolder === item.name ? path : null}
                  {...item}
                />
              );
            } else {
              return <File key={item.name} level={level + 1} {...item} />;
            }
          })}
      </>
    );
  }
}

export default Folder;
