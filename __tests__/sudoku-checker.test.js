import { horizontalCheck, allHorizontalLinesCheck, verticalCheck, allVerticalLinesCheck } from './../src/main.js';

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
