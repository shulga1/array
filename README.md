# JavaScript. Arrays

_Here you can find a challenge on the topic Arrays._
_Здесь собраны испытания по теме массивы._

## compareVersion.js

_Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает переданные версии version1 и version2. Если version1 > version2, то функция должна вернуть 1, если version1 < version2, то (-1), если же version1 = version2, то 0._

#### _Examples_
    compareVersion("1.1", "1.2"); // -1
    compareVersion("1.2", "1.1"); //  1
    compareVersion("1.2", "1.2"); //  0

## sumIntervals.js

_Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив интервалов и возвращает сумму всех длин интервалов. В данной задаче используются только интервалы целых чисел от -100 до 100 , которые представлены в виде массива. Первое значение интервала всегда будет меньше, чем второе значение. Например, длина интервала [-100, 0] равна 100, а длина интервала [5, 5] равна 0. Пересекающиеся интервалы должны учитываться только один раз._

#### _Examples_
    sumIntervals([[5, 5]]);           // 0
    sumIntervals([[5, 6], [5, 7]]);   // 2
    sumIntervals([[-10, 1], [2, 3]]); // 12

## lengthOfLastWord.js

_Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов._

#### _Examples_
    lengthOfLastWord('');     // 0
    lengthOfLastWord('word'); // 4
    lengthOfLastWord( 'w'  ); // 1

## hammingWeight.js

_Вес Хэмминга — это количество единиц в двоичном представлении числа. Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга._

#### _Examples_
    hammingWeight(0); // 0
    hammingWeight(2); // (10)  = 1
    hammingWeight(4); // (100) = 1

## getMirrorMatrix.js

_Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу) и возвращает массив, изменённый таким образом, что правая половина матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. Матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк. Постарайтесь решить данное испытание без использования встроенных методов массива. Ограничение не касается метода push(), который добавляет элементы в массив._

#### _Examples_
    getMirrorMatrix([
                     [1, 2, 3, 4],
                     [5, 6, 7, 8],
                     [9, 1, 2, 3],
                     [4, 5, 6, 7],
                    ]);
    //   [
    //    [1, 2, 2, 1],
    //    [5, 6, 6, 5],
    //    [9, 1, 1, 9],
    //    [4, 5, 5, 4]
    //   ]

## chunk.js

_Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности._

#### _Examples_
    chunk(['a', 'b', 'c', 'd'], 2); 
    // [['a', 'b'], ['c','d']]
    chunk(['a', 'b', 'c', 'd'], 3);
    // [['a''b''c'], ['d']]

## isContinuousSequence.js

_Реализуйте и экспортируйте по умолчанию функцию, которая проверяет, является ли переданная последовательность целых чисел возрастающей непрерывно (не имеющей пропусков чисел). Например, последовательность [4, 5, 6, 7] — непрерывная, а [0, 1, 3] — нет. Последовательность может начинаться с любого числа, главное условие — отсутствие пропусков чисел. Последовательность из одного числа не может считаться возрастающей._

#### _Examples_
    isContinuousSequence([0]); // false
    isContinuousSequence([1, 2, 3]); // true
    isContinuousSequence([-1, -2, -3]) // false

## buildSnailPath.js

_Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход матрицу и возвращает список элементов матрицы по порядку следования от левого верхнего элемента по часовой стрелке к внутреннему. Движение по матрице напоминает улитку_

#### _Examples_
    buildSnailPath.js([
        [1, 2],
        [3, 4]
    ]);

    // [1, 2, 4, 3]
    
    buildSnailPath.js([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]);
    
    // [1, 2, 3, 6, 9, 8, 7, 4, 5]

## calcInPolishNotation.js

_В данном упражнении необходимо реализовать стековую машину, то есть алгоритм, проводящий вычисления по обратной польской записи._

_Обратная польская нотация или постфиксная нотация — форма записи математических и логических выражений, в которой операнды расположены перед знаками операций. Выражение читается слева направо. Когда в выражении встречается знак операции, выполняется соответствующая операция над двумя ближайшими операндами, находящимися слева от знака операции. Результат операции заменяет в выражении последовательность её операндов и знак, после чего выражение вычисляется дальше по тому же правилу. Таким образом, результатом вычисления всего выражения становится результат последней вычисленной операции._

_Например, выражение (1 + 2) * 4 + 3 в постфиксной нотации будет выглядеть так: 1 2 + 4 * 3 +, а результат вычисления: 15. Другой пример - выражение: 7 - 2 * 3, в постфиксной нотации: 7 2 3 * -, результат: 1._

#### _Examples_
    calcInPolishNotation([4, 3, '+']);         //  7
    calcInPolishNotation([4, 3, 3, '*', '-']); // -5

*Обратная польская запись
*Умножение матриц
*Cписок диапазонов
*Вращение матрицы
*Морской бой
*Треугольник Паскаля
*Самая длинная подстрока