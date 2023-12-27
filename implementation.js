function customIsNaN(value) {
  // Перевірка, чи аргумент - число
  if (typeof value === 'number') {
    // Перевірка, чи аргумент не є NaN
    return value !== value;
  }
  // Якщо аргумент не є числом, то він точно не є NaN
  return false;
}

