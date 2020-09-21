const getLongestLength = (str) => {
  let maxLength = 0;

  for (let index = 0; index < str.length; index += 1) {
    const newStr = str.slice(index).split('');
    const [first, ...rest] = newStr;
    const substringUniqSymbol = [first];
    for (let subIndex = 0; subIndex < rest.length; subIndex += 1) {
      const curSymbol = rest[subIndex];

      if (substringUniqSymbol.indexOf(curSymbol) !== -1) {
        break;
      }

      substringUniqSymbol.push(curSymbol);
    }

    if (substringUniqSymbol.length > maxLength) {
      maxLength = substringUniqSymbol.length;
    }
  }

  return maxLength;
};

export default getLongestLength;
