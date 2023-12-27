function pad(str, char, length, addToStart) {
  // Перевірка, чи потрібно додавати символи
  if (length <= str.length) {
    return str;
  }

  // Визначення кількості символів для додавання
  const padLength = length - str.length;

  // Створення рядка з символами для додавання
  const padChars = char.repeat(padLength);

  // Додавання символів до початку або кінця рядка
  return addToStart ? padChars + str : str + padChars;
}
