
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
for (let i = 1; i < matrix.length; i++){
    if (i % 2 === 1){
      matrix[i].reverse()
    }  
    }
    let newArr = matrix.flat();
  return newArr;
}
