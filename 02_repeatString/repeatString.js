const repeatString = function (string, number) {
  if (number < 0) {
    return "ERROR";
  }
  let x = 0;
  let repeatedString = "";
  while (x < number) {
    repeatedString = repeatedString.concat(string);
    x++;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
