import React, { Component } from "react";
import debounce from "lodash.debounce";

import { SearchContext } from "../contexts/search";
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

const searchForFiles = (data, searchValue) => {
  if (!searchValue) {
    return [];
  }

  const regex = new RegExp(searchValue, "i");
  const finalResults = [];
  let path = [];

  const recursiveFn = data => {
    data.forEach(item => {
      if (item.children) {
        path.push(item.name);
        recursiveFn(item.children);
      } else {
        if (regex.test(item.name)) {
          path.push(item.name);
          finalResults.push("/" + path.join("/"));
          path.pop();
        }
      }
    });

    path.pop();
  };

  recursiveFn(data);

  return finalResults;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      expandedFolders: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  _debouncedSearch = debounce(
    searchResults => this.setState({ expandedFolders: searchResults }),
    500
  );

  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
    const foundPaths = searchForFiles(data, e.target.value);
    this._debouncedSearch(foundPaths);
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
        <SearchContext.Provider value={!!this.state.searchValue}>
          <MyBrowser data={data} expandedFolders={expandedFolders} />
        </SearchContext.Provider>
      </div>
    );
  }
}

export default App;
