const line = function (char, length) {
  return char.repeat(length);
}

const spacesAndChars = function (char, lineLength, charCount) {
  const lineOfChars = line(char, charCount);
  return lineOfChars.padStart(lineLength) + "\n";
}

const erectTraingle = function (char, baseLength) {
  let triangle = "";
  let lineLength = Math.ceil(baseLength / 2);

  for (charCount = 1; charCount < baseLength; charCount += 2) {
    triangle += spacesAndChars(char, lineLength, charCount);
    lineLength = lineLength + 1;
  }
  return triangle;
}

const invertedTriangle = function (char, baseLength) {
  let triangle = "";
  let lineLength = baseLength - 1;

  for (charCount = baseLength - 2; charCount >= 1; charCount -= 2) {
    triangle += spacesAndChars(char, lineLength, charCount);
    lineLength -= 1;
  }
  return triangle;
}

const filledDiamond = function (size) {
  const middleLine = line("*", size) + "\n";

  return erectTraingle("*", size) + middleLine + invertedTriangle("*", size);
}

console.log(filledDiamond(5));