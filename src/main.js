//1 2 4 3     -- > [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]]
//4 3 1 2
//3 4 2 1
//2 1 3 4

export function horizontalCheck(array) {
  let checkArray = [];
  for (let i=0; i < array.length; i++) {
    if (checkArray.includes(array[i])) {
      return false;
    }
    checkArray.push(array[i]);
  }
  return true;
}

export function allHorizontalLinesCheck(sudokuArray) {
  for (let i=0; i<sudokuArray.length; i++) {
    if (!horizontalCheck(sudokuArray[i])) {
      return false;
    }
  }
  return true;
}

export function verticalCheck(sudokuArray, j) {
  let checkArray = [];
  for (let i=0; i<sudokuArray.length; i++) {
    if(checkArray.includes(sudokuArray[i][j])) {
      return false;
    }
    checkArray.push(sudokuArray[i][j]);
  }
  return true;
}

export function allVerticalLinesCheck(sudokuArray) {
  for (let i=0; i<sudokuArray.length; i++) {
    if (!verticalCheck(sudokuArray, i)) {
      return false;
    }
  }
  return true;
}

/*sudokuArray = [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]]
0 1 2 3

j = 2

sudokuArray[i][j]
sudokuArray[0] = [1, 2, 4, 3]

sudokuArray[0][2] = 4;
sudokuArray[1][2] = 1;
sudokuArray[2][2] = 2;
sudokuArray[3][2] = 3;*/