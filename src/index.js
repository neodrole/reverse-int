module.exports = function reverse (n) {
  if (n<0) {
    n = n*(-1);
  }

  let stringNum = String(n);
  let stringSplit = stringNum.split("");
  stringNum = stringSplit.reverse().join("");
  return Number(stringNum);
}
