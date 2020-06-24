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

export function squareCheck(subArrays) {
  let checkArray = [];
  for (let i=0; i < subArrays.length; i++) {
    for (let j =0; j < subArrays[i].length; j++){
      if (checkArray.includes(subArrays[i][j])) {
        return false;
      }
      checkArray.push(subArrays[i][j]);
    }
  }
  return true;
}

export function columnCheck(columnArray, sideSize) {
  let start = 0;
  while(start < columnArray.length) {
    let sideSizeArrays = columnArray.slice(start, start + sideSize);
    if (!squareCheck(sideSizeArrays)) {
      return false;
    }
    start += sideSize;
  }
  return true;
}

export function allSquareCheck(sudokuArray) {
  let side = Math.sqrt(sudokuArray.length);
  let start = 0;
  while (start < sudokuArray.length) {
    let columnsArray = [];
    for (let i=0; i<sudokuArray.length; i++) {
      columnsArray.push(sudokuArray[i].slice(start, start+side));
    }
    if (!columnCheck(columnsArray, side)) {
      return false;
    }
    start +=side;
  }
  return true;
}