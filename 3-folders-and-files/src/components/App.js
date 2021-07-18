import React, { Component } from "react";
import data from "../data/data.json";
import "../styles/App.css";
import MyBrowser from "./MyBrowser";

const testExpandedFolders = [
  "/Common7",
  "/SDK/Bootstrapper",
  "/VC/redist/onecore",
  "/VC/redist/x86",
  "/Common7/Tools",
  "/VC/crt",
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      expandedFolders: [...testExpandedFolders],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { searchValue, expandedFolders } = this.state;

    return (
      <div className="App">
        <input
          type="text"
          placeholder="Your search input here..."
          value={searchValue}
          onChange={this.handleSearch}
        ></input>
        <MyBrowser data={data} expandedFolders={expandedFolders} />
      </div>
    );
  }
}

export default App;
