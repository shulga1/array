const operators = ['+', '-', '*', '/'];

export const calculator = (first, second, operator) => {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return first / second;
    default:
      throw new Error(`an unidentified operator: '${operator}'!`);
  }
};

const calcInPolishNotation = (expression) => {
  const buffer = [];

  expression.forEach((value) => {
    if (!operators.includes(value)) {
      buffer.push(value);
    }

    if (operators.includes(value)) {
      const secondNum = buffer.pop();
      const firstNum = buffer.pop();
      const temp = calculator(firstNum, secondNum, value);
      buffer.push(temp);
    }
  });

  return buffer.pop();
};

export default calcInPolishNotation;
