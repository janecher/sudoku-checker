import { horizontalCheck, allHorizontalLinesCheck, verticalCheck, allVerticalLinesCheck, squareCheck, columnCheck, allSquareCheck } from './../src/main.js';

describe('horizontalCheck', () => {

  test('should check if all numbers in horizontal array are unique', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [2, 3, 3, 1];
    expect(horizontalCheck(array1)).toEqual(true);
    expect(horizontalCheck(array2)).toEqual(false);
  });
});

describe('allHorizontalLinesCheck', () => {

  test('should check if all horizontal arrays pass sudoku rules', () => {
    const array1 = [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    const array2 = [[1, 2, 4, 3], [4, 3, 3, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    expect(allHorizontalLinesCheck(array1)).toEqual(true);
    expect(allHorizontalLinesCheck(array2)).toEqual(false);
  });
});

describe('verticalCheck', () => {

  test('should check if all numbers in sudoku array of array at particular index are unique', () => {
    const array1 = [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    const array2 = [[1, 2, 4, 3], [4, 3, 2, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    const j = 2;
    expect(verticalCheck(array1, j)).toEqual(true);
    expect(verticalCheck(array2, j)).toEqual(false);
  });
});

describe('allVerticalLinesCheck', () => {

  test('should check if all vertical lines pass sudoku rules', () => {
    const array1 = [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    const array2 = [[1, 2, 4, 3], [4, 3, 2, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    expect(allVerticalLinesCheck(array1)).toEqual(true);
    expect(allVerticalLinesCheck(array2)).toEqual(false);
  });
});

describe('squareCheck', () => {

  test('should check if one of sudoku square has all unique numbers', () => {
    const array1 = [[1, 2], [4, 3]];
    const array2 = [[1, 2], [4, 2]];
    const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(squareCheck(array1)).toEqual(true);
    expect(squareCheck(array2)).toEqual(false);
    expect(squareCheck(array3)).toEqual(true);
  });
});

describe('columnCheck', () => {

  test('should check if all square in column has all unique numbers', () => {
    const side2 = 2;
    const side3 = 3;
    const array1 = [[1, 2], [4, 3], [3, 4], [2, 1]];
    const array2 = [[1, 2], [4, 2], [3, 4], [2, 2]];
    const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 5, 7], [1, 2, 6], [4, 8, 9], [7, 4, 5], [3, 2, 1], [8, 9, 6]];
    expect(columnCheck(array1, side2)).toEqual(true);
    expect(columnCheck(array2, side2)).toEqual(false);
    expect(columnCheck(array3, side3)).toEqual(true);
  });
});

describe('allSquareCheck', () => {

  test('should check if all square in sudoku board has all unique numbers', () => {
    const array1 = [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    const array2 = [[1, 2, 4, 3], [4, 3, 2, 2], [3, 4, 2, 1], [2, 1, 3, 4]];
    expect(allSquareCheck(array1)).toEqual(true);
    expect(allSquareCheck(array2)).toEqual(false);
  });
});