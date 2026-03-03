// 1. Обмен значениями двух переменных
// Создать две переменные a и b и поменять их значения местами без использования третьей переменной.
let a = 10;
let b = 25;
[a, b] = [b, a];
console.log('1)', { a, b }); // { a: 25, b: 10 }

// 2. Проверка чётного или нечётного числа
// Написать функцию isEven(num), которая возвращает true, если число чётное, иначе false.
function isEven(num) {
  return num % 2 === 0;
}
console.log('2)', isEven(8), isEven(7)); // true false

// 3. Сумма чисел от 1 до N
// Написать функцию sumTo(n), которая возвращает сумму всех чисел от 1 до n.
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('3)', sumTo(5)); // 15

// 4. Переворот строки
// Написать функцию reverseString(str), которая переворачивает строку.
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log('4)', reverseString('hello')); // olleh

// 5. Фильтрация массива по чётным числам
// Написать функцию filterEven(arr), которая возвращает новый массив только с чётными значениями.
function filterEven(arr) {
  const result = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}
console.log('5)', filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 6. Конвертер температуры
// Создать 2 функции: celsiusToFahrenheit(c) и fahrenheitToCelsius(f).
function celsiusToFahrenheit(c) {
  return c * (9 / 5) + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * (5 / 9);
}
console.log('6)', celsiusToFahrenheit(0), fahrenheitToCelsius(32)); // 32 0

// 7. Проверка строки на палиндром
// Написать функцию isPalindrome(str), которая игнорирует пробелы и регистр.
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/\s+/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}
console.log('7)', isPalindrome('Race car'), isPalindrome('Hello')); // true false

// 8. Сумма всех элементов массива (for)
// Написать функцию sumArray(arr), которая с помощью цикла for возвращает сумму всех чисел массива.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log('8)', sumArray([2, 4, 6])); // 12

// 9. Найти самое длинное слово в массиве строк (for…of)
// Написать функцию longestWord(words), которая с помощью for…of находит самое длинное слово.
function longestWord(words) {
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log('9)', longestWord(['apple', 'banana', 'kiwi'])); // banana

// 10. Подсчитать количество свойств в объекте (for…in)
// Написать функцию countProps(obj), которая возвращает число ключей объекта.
function countProps(obj) {
  let count = 0;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      count++;
    }
  }
  return count;
}
console.log('10)', countProps({ a: 1, b: 2, c: 3 })); // 3

// 11. Вывести числа от 1 до N (while)
// Написать функцию printTo(n), которая выводит в консоль числа от 1 до n с помощью цикла while.
function printTo(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}
console.log('11) printTo(5):');
printTo(5);

// 12. Найти число в массиве вручную (без includes)
// Функция manualFindIndex(arr, value) должна вернуть индекс найденного элемента или undefined.
function manualFindIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return undefined;
}
console.log('12)', manualFindIndex([1, 2, 3], 2), manualFindIndex([1, 2, 3], 10)); // 1 undefined
