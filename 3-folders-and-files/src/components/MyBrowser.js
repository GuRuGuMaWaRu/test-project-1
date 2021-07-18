import React, { Component } from "react";

import data from "../data/data.json";
import Folder from "./Folder";
import File from "./File";

export class MyBrowser extends Component {
  render() {
    const selectedFolders = this.props.expandedFolders.reduce((acc, item) => {
      const folderName = item.match(/^\/[^/]*/)[0].slice(1);
      acc[folderName] = item.slice(folderName.length + 1);
      return acc;
    }, {});

    return data.map(item => {
      if (item.type === "FOLDER") {
        return (
          <Folder
            key={item.name}
            level={1}
            selectedPath={selectedFolders[item.name]}
            {...item}
          />
        );
      } else {
        return <File key={item.name} level={1} {...item} />;
      }
    });
  }
}

export default MyBrowser;
