const summaryRanges = (colls) => {
  const result = [];
  let start = 'empty';
  let switching = true;
  let currentNum = 'empty';

  for (let index = 0; index < colls.length; index += 1) {
    const nextNum = colls[index + 1];
    const prevNum = colls[index - 1];

    if (start !== 'empty' && prevNum + 1 === colls[index]) {
      currentNum = colls[index];
    }

    if (switching) {
      start = colls[index];
      switching = false;
    }

    if (colls[index] + 1 !== nextNum) {
      if (start !== 'empty' && currentNum !== 'empty') {
        result.push(`${start}->${currentNum}`);
      }

      switching = true;
      start = 'empty';
      currentNum = 'empty';
    }
  }

  return result;
};

export default summaryRanges;
