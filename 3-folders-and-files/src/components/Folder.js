import React, { Component } from "react";

import { SearchContext } from "../contexts/search";
import { selectFolders } from "../api/helpers";
import "../styles/Folder.css";
import File from "./File";

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
          <SearchContext.Consumer>
            {searchActive =>
              children.map(item => {
                if (item.type === "FOLDER") {
                  return (
                    <Folder
                      key={item.name + level}
                      level={level + 1}
                      selectedPaths={
                        selectedFolders ? selectedFolders[item.name] : null
                      }
                      {...item}
                    />
                  );
                } else {
                  if (searchActive) {
                    if (selectedFolders && selectedFolders[item.name]) {
                      return (
                        <File key={item.name + 1} level={level + 1} {...item} />
                      );
                    } else {
                      return null;
                    }
                  }

                  return (
                    <File key={item.name + 1} level={level + 1} {...item} />
                  );
                }
              })
            }
          </SearchContext.Consumer>
        )}
      </>
    );
  }
}

export default Folder;
