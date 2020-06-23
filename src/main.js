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
