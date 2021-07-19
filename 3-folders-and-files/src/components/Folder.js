import React, { Component } from "react";

import { selectFolders } from "../api/helpers";
import "../styles/Folder.css";
import Renderer from "./Renderer";

export class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: this.props.selectedPaths ? true : false,
    };
    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleExpansion() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedPaths !== this.props.selectedPaths) {
      this.setState({ expanded: this.props.selectedPaths ? true : false });
    }
  }

  render() {
    const { name, children, level, selectedPaths = null } = this.props;
    let selectedFolders = null;

    if (selectedPaths) {
      selectedFolders = selectFolders(selectedPaths);
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
        {this.state.expanded && (
          <Renderer
            children={children}
            level={level + 1}
            selectedFolders={selectedFolders}
          />
        )}
      </>
    );
  }
}

export default Folder;
