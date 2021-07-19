import React, { PureComponent } from "react";

import { selectFolders } from "../api/helpers";
import Renderer from "./Renderer";

export class MyBrowser extends PureComponent {
  render() {
    const { data, expandedFolders } = this.props;

    const selectedFolders = selectFolders(expandedFolders);

    return <Renderer children={data} selectedFolders={selectedFolders} />;
  }
}

export default MyBrowser;
