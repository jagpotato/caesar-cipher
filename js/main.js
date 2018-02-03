const zCODE = 122
const ZCODE = 90;
const string = "aQke3~1eJPBg{9aZT";
const shift = 3;

console.log("平文");
console.log(string);
caesar(string, shift);

function caesar(string, shift) {
  let splitString = string.split("");
  let result = "";
  splitString.map(function(char) {
    let code = char.charCodeAt(0);
    code += shift;
    if ( /[a-z]/.test(char) === true ) {
      if ( code > zCODE ) {
        code -= 26;
      }
      result += String.fromCharCode(code);
    } else if ( /[A-Z]/.test(char) === true ) {
      if ( code > ZCODE ) {
        code -= 26;
      }
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  });
  console.log("暗号文");
  console.log(result);
}