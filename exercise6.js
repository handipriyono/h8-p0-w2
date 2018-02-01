// 1. Melakukan Looping Menggunakan While

var angka = 2;
console.log('LOOPING PERTAMA ');
while (angka <= 20) {
  console.log(angka + ' - I love coding');
  angka += 2;
}

var angka = 20;
console.log('LOOPING KEDUA ');
while (angka >= 2) {

  console.log(angka + ' - I will become fullstack developer');
  angka -= 2;
}




// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var i = 20; i >= 1; i -= 1) {
  console.log(i + ' - I will become fullstack developer');
}




// 3. Angka Ganjil dan Genap

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}



for (var i = 1; i <= 100; i = i + 2) {
  if (i % 3 === 0) {
    console.log(i + ' kelipatan 3');
  }
}



for (var i = 1; i <= 100; i = i + 5) {
  if (i % 6 === 0) {
    console.log(i + ' kelipatan 6');
  }
}



for (var i = 1; i <= 100; i = i + 9) {
  if (i % 10 === 0) {
    console.log(i + ' kelipatan 10');
  }
}
