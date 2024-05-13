const reverseString = function(string) {
    let slicedLetter = '';
    let reversedString = '';
    let stringLength = string.length;

    while(stringLength > 0) {
        slicedLetter = slicedLetter.slice(stringLength)
        reversedString = reversedString.concat(slicedLetter)
        stringLength--
    }
    return reversedString;
};
reverseString("Hello")
// Do not edit below this line
module.exports = reverseString;
5