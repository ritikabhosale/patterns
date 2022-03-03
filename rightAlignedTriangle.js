const line = function (char, length) {
  return char.repeat(length);
}

const rightAlignedTriangle = function (size) {
  let triangle = "";

  for (let lineNum = 0; lineNum < size; lineNum++) {
    const lineOfChars = line("*", lineNum + 1);
    triangle += lineOfChars.padStart(size) + "\n";
  }

  return triangle;
}

console.log(rightAlignedTriangle(6));