// 1. Menyusun Barisan Bintang

var rows1 = 5;
var baris = 0;

while (baris < rows1) {
  console.log('*');
  baris++;
}



// 2. Menyusun Barisan Bintang Dengan Nested Looping
let rows2 = 5;
let barisLuar = 0;
let barisDalam = 0;
let bintang = '';

while (barisLuar < rows2) {

  while (barisDalam < rows2) {
    bintang = bintang + '*';
    barisDalam++;
  }

  console.log(bintang);
  barisLuar++;
}




// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

let rows3 = 5;
let barisLuar = 0;
let barisDalam = 0;
let star = '';

//print kebawah sebanyak 7
while (barisLuar < rows3) {

  while (barisDalam <= barisLuar) {
    star = star + '*';
    barisDalam++;
  }

  console.log(star);
  barisLuar++;
}
