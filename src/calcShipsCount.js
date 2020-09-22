const isValidArea = (arr) => {
  for (let line = 1; line < arr.length; line += 1) {
    for (let field = 0; field < arr.length; field += 1) {
      const currentField = arr[line][field];
      const prevLine = arr[line - 1];
      if (currentField && (prevLine[field - 1] || prevLine[field + 1])) {
        return false;
      }
    }
  }

  return true;
};

const calcShipsCount = (area) => {
  let shipCount = 0;
  for (let line = 0; line < area.length; line += 1) {
    for (let field = 0; field < area.length; field += 1) {
      const currentField = area[line][field];
      const prevField = area[line][field - 1];
      const prevLine = area[line - 1] ? area[line - 1][field] : 0;

      if (currentField) {
        if (!prevField && !prevLine) {
          shipCount += 1;
        }
      }
    }
  }
  return shipCount;
};

export { calcShipsCount, isValidArea };
