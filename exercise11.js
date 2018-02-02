

function balikKata(kata) {
  var gabung = '';

  for (var i = kata.length - 1; i >= 0; i--) {
    var ai = kata.split('');
    gabung = gabung + kata[i];
  }

  return gabung;
}



// Only sample : TEST CASES
console.log(balikKata('handi priyono')); // onoyirp idnah
console.log(balikKata('Hacktiv8 fullstack javascript')); // tpircsavaj kcatslluf 8vitkcaH
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
