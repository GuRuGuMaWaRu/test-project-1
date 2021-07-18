export const selectFolders = selectedPaths => {
  return selectedPaths.reduce((acc, item) => {
    const folderName = item.match(/^\/[^/]*/)[0].slice(1);
    const path = item.slice(folderName.length + 1);

    if (acc.hasOwnProperty(folderName)) {
      acc[folderName].push(path);
    } else {
      acc[folderName] = path.length > 1 ? [path] : [];
    }

    return acc;
  }, {});
};
