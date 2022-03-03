const row = function (char, columnCount) {
  return char.repeat(columnCount);
}

const filledRectangle = function (rowCount, columnCount) {
  return (row("*", columnCount) + "\n").repeat(rowCount);
}

console.log(filledRectangle(3, 4));
console.log(filledRectangle(4, 8));