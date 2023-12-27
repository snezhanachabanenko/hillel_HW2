function checkProbabilityTheory(count) {
  // Лічильники для парних та непарних чисел
  let evenCount = 0;
  let oddCount = 0;

  // Генерація та обробка випадкових чисел
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    // Перевірка на парність та збільшення лічильника відповідно
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // Виведення результатів
  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", evenCount);
  console.log("Непарних чисел:", oddCount);
  
  // Обчислення та виведення відсоткового співвідношення парних до непарних
  const percentageEven = (evenCount / count) * 100;
  const percentageOdd = (oddCount / count) * 100;
  console.log("Відсоток парних до не парних:", percentageEven.toFixed(2) + "%:" + percentageOdd.toFixed(2) + "%");
}

// Приклад використання
checkProbabilityTheory(1000);
