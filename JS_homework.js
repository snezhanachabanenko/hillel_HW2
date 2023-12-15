// 'number' + 3 + 3
const result1 = 'number' + 3 + 3; // Результат: 'number33'

// null + 3
const result2 = null + 3; // Результат: 3

// 5 && "qwerty"
const result3 = 5 && "qwerty"; // Результат: 'qwerty'

// +'40' + +'2' + "hillel"
const result4 = +'40' + +'2' + "hillel"; // Результат: 42hillel

// '10' - 5 === 6;
const result5 = '10' - 5 === 6; // Результат: true

// true + false
const result6 = true + false; // Результат: 1

// '4px' - 3
const result7 = '4px' - 3; // Результат: NaN

// '4' - 3
const result8 = '4' - 3; // Результат: 1

// '6' + 3 ** 0;
const result9 = '6' + 3 ** 0; // Результат: '61'

// 12 / '6'
const result10 = 12 / '6'; // Результат: 2

// '10' + (5 === 6);
const result11 = '10' + (5 === 6); // Результат: '10false'

// null == ''
const result12 = null == ''; // Результат: false

// 3 ** (9 / 3);
const result13 = 3 ** (9 / 3); // Результат: 27

// !!'false' == !!'true'
const result14 = !!'false' == !!'true'; // Результат: true

// 0 || '0' && 1
const result15 = 0 || '0' && 1; // Результат: 1

// (+null == false) < 1;
const result16 = (+null == false) < 1; // Результат: true

// false && true || true
const result17 = false && true || true; // Результат: true

// false && (false || true);
const result18 = false && (false || true); // Результат: false

// (+null == false) < 1 ** 5;
const result19 = (+null == false) < 1 ** 5; // Результат: true
