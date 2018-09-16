module.exports = function solveEquation(equation) {
  var result = [];
  var  arr = equation.split('x');
  var aFromArr = arr[0];
  var anew = aFromArr.replace(" * ", "");
  var a = anew.replace(" ", "");
  var bFromArr = arr[1];
  var bnew = bFromArr.replace("^2 ", "");
  var bnewtwo = bnew.replace(" * ", "");
  var b = bnewtwo.replace(" ", "");
  var cFromArr = arr[2];
  var newc = cFromArr.replace(" ", "");
  var c = newc.replace(" ", "");
  var D = ((b * b) - (4 * a * c));
  var kv = Math.round(Math.sqrt(D));
  var xFirst = (((-1) * b + kv) / (2 * a));
  var xSecond = (((-1) * b - kv) / (2 * a));
  result.push(xFirst);
  result.push(xSecond);
  result.sort(function(a, b){return a - b});

  return result;// your implementation
}
