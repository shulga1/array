const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;

  // Проходимся по всем символам переданной строки.
  for (const char of str) {
    // Ищем в сформированной последовательности
    // позицию первого вхождения текущего символа.
    const index = sequence.indexOf(char);
    // Добавляем в последовательность текущий символ.
    sequence.push(char);
    if (index !== -1) {
      // Если символ в последовательности был найден,
      // значит в неё был добавлен повторяющийся символ.
      // Отсекаем из все символы включая найденный.
      sequence = sequence.slice(index + 1);
    }
    // Получаем длину последовательности.
    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      // Если длина последовательности больше чем максимальная,
      // устанавливаем новую максимальную длину.
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};

getLongestLength('1234561qweqwer')

export default getLongestLength;
