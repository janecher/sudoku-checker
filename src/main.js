//1 2 4 3     -- > [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]]
//4 3 1 2
//3 4 2 1
//2 1 3 4

export function horizontalCheck(array) {
  let checkArray = [];
  for(let i=0; i < array.length; i++){
    if(checkArray.includes(array[i])){
      return false;
    }
    checkArray.push(array[i]);
  }
  return true;
}
