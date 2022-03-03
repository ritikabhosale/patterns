const hollowRows = function (char, rowCount, columnCount) {
  const hollowRow = char.padEnd(columnCount - 1) + char + "\n";
  return hollowRow.repeat(rowCount).trimEnd();
}

const row = function (char, columnCount) {
  return char.repeat(columnCount);
}

const emptyRectangle = function (rowCount, columnCount) {
  const firstRow = row("*", columnCount);
  const lastRow = row("*", columnCount);
  const middleRows = hollowRows("*", rowCount - 2, columnCount);

  return firstRow + "\n" + middleRows + "\n" + lastRow;
}

console.log(emptyRectangle(6, 12));