function konversiMenit(menit) {

  if (menit > 60) {
    var hasilmenit = Math.floor(menit / 60);
    var detiknya = menit % 60;

    if (String(detiknya).length == 1) {
      var result = (hasilmenit + ':0' + detiknya);
      return result;

    } else {
      var result1 = (hasilmenit + ':' + detiknya);
      return result1;
    }
  } else if (menit < 60) {
    if (String(menit).length == 1) {
      var hasil1 = '0:0' + menit;
      return hasil1;
    } else {
      hasil1 = ('0:' + menit);
      return hasil1;
    }
  } else {
    console.log('er');
  }
}
