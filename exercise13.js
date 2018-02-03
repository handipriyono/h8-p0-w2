function xo(str) {

  var oCari = str.match(/o/g);
  var xCari = str.match(/x/g);
  var oTotal = oCari.length;
  var xTotal = xCari.length;

  if (oTotal == xTotal) {
    return true;
  } else {
    return false;
  }

}
