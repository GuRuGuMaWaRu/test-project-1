import React, { PureComponent } from "react";

import { selectFolders } from "../api/helpers";
import Folder from "./Folder";
import File from "./File";

export class MyBrowser extends PureComponent {
  render() {
    const { data, expandedFolders } = this.props;

    const selectedFolders = selectFolders(expandedFolders);

    return data.map(item => {
      if (item.type === "FOLDER") {
        return (
          <Folder
            key={item.name}
            level={1}
            selectedPaths={selectedFolders[item.name]}
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
