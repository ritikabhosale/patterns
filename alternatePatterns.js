const isEven = function (number) {
  return number % 2 == 0;
}

const line = function (char, length) {
  return char.repeat(length);
}

const alternatePatterns = function (lineCount, lineLength) {
  let rectangle = "";

  for (let lineNum = 0; lineNum < lineCount; lineNum++) {
    let char = (isEven(lineNum)) ? "*" : "-";
    rectangle += line(char, lineLength) + "\n";
  }
  return rectangle;
}

console.log(alternatePatterns(5, 10));