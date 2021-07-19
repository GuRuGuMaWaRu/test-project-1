import React from "react";

import { SearchContext } from "../contexts/search";
import Folder from "./Folder";
import File from "./File";

const Renderer = ({ children, level = 1, selectedFolders }) => {
  return (
    <SearchContext.Consumer>
      {searchActive =>
        children.map(item => {
          if (item.type === "FOLDER") {
            return (
              <Folder
                key={item.name + level}
                level={level}
                selectedPaths={
                  selectedFolders ? selectedFolders[item.name] : null
                }
                {...item}
              />
            );
          } else {
            if (searchActive) {
              if (selectedFolders && selectedFolders[item.name]) {
                return <File key={item.name + 1} level={level} {...item} />;
              } else {
                return null;
              }
            }

            return <File key={item.name + 1} level={level} {...item} />;
          }
        })
      }
    </SearchContext.Consumer>
  );
};

export default Renderer;
