let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

const totalSum = [...arr_1,...arr_2].reduce((acc, value) => acc + value, 0);

console.log(totalSum);
