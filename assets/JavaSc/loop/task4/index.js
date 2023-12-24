let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];

const sumArray = arr_3.map((value,index) => value + arr_4[index]);
console.log(sumArray);