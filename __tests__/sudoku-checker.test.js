import { horizontalCheck } from './../src/main.js';

describe('horizontalCheck', () => {

  test('should check if all numbers in horizontal array are unique', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [2, 3, 3, 1];
    expect(horizontalCheck(array1)).toEqual(true);
    expect(horizontalCheck(array2)).toEqual(false);
  });
});