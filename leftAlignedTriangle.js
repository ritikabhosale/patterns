const line = function (char, length) {
  return char.repeat(length);
}

const leftAlignedTriangle = function (size) {
  let triangle = "";

  for (let lineNum = 1; lineNum <= size; lineNum++) {
    triangle += line("*", lineNum) + "\n";
  }
  return triangle;
}

console.log(leftAlignedTriangle(6));