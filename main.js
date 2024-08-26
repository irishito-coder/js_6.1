let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let evenNumbers = []; // массив для четных чисел
let oddNumbers = [];  // массив для нечетных чисел

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]); // если число четное, добавляем его в evenNumbers
    } else {
        oddNumbers.push(array[i]); // если число нечетное, добавляем его в oddNumbers
    }
}

console.log("Четные числа:", evenNumbers);
console.log("Нечетные числа:", oddNumbers);
