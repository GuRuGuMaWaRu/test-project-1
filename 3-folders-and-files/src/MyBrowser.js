import React, { Component } from "react";
import data from "./data.json";
import Folder from "./Folder";
import File from "./File";
export class MyBrowser extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: null,
  //   };
  // }

  // componentDidMount() {
  //   fetch("./data.json")
  //     .then(res => {
  // 			console.log(res);
  // 			return res.json();
  // 		})
  //     .then(data => this.setState({ data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    console.log(data);

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
