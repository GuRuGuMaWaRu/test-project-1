import React, { Component } from "react";

import data from "../data/data.json";
import Folder from "./Folder";
import File from "./File";

export class MyBrowser extends Component {
  render() {
    return data.map(item => {
      if (item.type === "FOLDER") {
        return <Folder key={item.name} level={1} {...item} />;
      } else {
        return <File key={item.name} level={1} {...item} />;
      }
    });
  }
}

export default MyBrowser;
