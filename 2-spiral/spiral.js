const spiral = matrix => {
  let uncoiled = [];

  while (matrix.length) {
    uncoiled = uncoiled.concat(matrix.shift());

    matrix = matrix
      .map(line => {
        uncoiled.push(line.pop());
        return line.reverse();
      })
      .reverse();
  }

  return uncoiled.join(" ");
};

const arr1 = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

console.log(spiral(arr1)); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const arr2 = [
  [0, 1, 2, 3, 4],
  [15, 16, 17, 18, 5],
  [14, 23, 24, 19, 6],
  [13, 22, 21, 20, 7],
  [12, 11, 10, 9, 8],
];

console.log(spiral(arr2)); // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
