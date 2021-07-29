// Even Character
// function evenChar(string) {
//   if (typeof string !== "string") {
//     return "error input bukan string";
//   } else {
//     let hasil = "";
//     for (let i = 0; i < string.length; i++) {
//       i % 2 === 1 ? (hasil += string[i]) : "";
//     }
//     return hasil;
//   }
// }
// console.log(evenChar("pratama"));

//Count Word
// function countWord(string) {
//   if (typeof string !== "string") {
//     return "error, input bukan string";
//   } else {
//     let spasi = 0;
//     for (let i = 0; i < string.length; i++) {
//       string[i] == " " ? (spasi += 1) : "";
//     }
//     return string.length ? spasi + 1 : 0;
//   }
// }

// console.log(countWord("hello hello hello hello"));

//count Vowel and consonant
// function voAndCon(string) {
//   if (typeof string !== "string") return "error input bukan string";
//   if (string === "") return "jumlah vokal : 0 , jumlah konsonan 0";

//   let konsonan = 0;
//   let vokal = 0;
//   for (let i = 0; i < string.length; i++) {
//     switch (string[i]) {
//       case "a":
//       case "i":
//       case "u":
//       case "e":
//       case "o":
//         vokal += 1;
//         break;
//       default:
//         konsonan += 1;
//         break;
//     }
//   }
//   return `jumlah vokal: ${vokal}, jumlah konsonan: ${konsonan}`;
// }

// console.log(voAndCon("hellohello"));

// reverse word
// function reverse(string) {
//   let newReverse = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newReverse += string[i];
//   }
//   return newReverse;
// }

// console.log(reverse("hello!"));

// Palindrome
// function palindrome(string) {
//   if (typeof string !== "string") {
//     return `error, input bukan string`;
//   } else {
//     let reverse = "";

//     for (let i = string.length - 1; i >= 0; i--) {
//       reverse += string[i];
//     }
//     return string.length > 1 && reverse === string;
//   }
// }

// console.log(palindrome("katak"));

//Exchange Coin
// function exchange(number) {
//   if (typeof number !== "number") {
//     return `Masukan Input Numerik!`;
//   } else {
//     const koin = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
//     let result = "";

//     for (let i = 0; i <= koin.length; i++) {
//       while (number >= koin[i]) {
//         result += `${koin[i]}, `;
//         number -= koin[i];
//       }
//     }
//     return result;
//   }
// }
// console.log(exchange(1212));

//asterik kiri
// function astKiri(input) {
//   if (typeof input !== "number") {
//     return `error, masukan input numerik!`;
//   } else {
//     let hasil = "";

//     // untuk loop luarnya, kalau mau reverse kita tinggal ubah loop terluarnya aja
//     //kenapa i'nya harus di mulai dari 1?? karena kalo dari 0 baris pertama jadi kosong
//     for (let i = 1; i <= input; i++) {
//       for (let j = 0; j < i; j++) {
//         hasil += "*";
//       }
//       hasil += "\n";
//     }
//     return hasil;
//   }
// }

// console.log(astKiri(5));

// pyramid
function pyramid(num) {
  if (typeof num !== "number") {
    return `error, masukan input numerik!`;
  } else {
    let hasil = "";
    // looping terluar
    for (let i = 1; i <= num; i++) {
      // looping spasi
      for (let j = 1; j <= num - i; j++) {
        hasil += " ";
      }
      // print star
      for (let k = 1; k < 2 * i; k++) {
        hasil += "*";
      }
      hasil += "\n";
    }
    return hasil;
  }
}

// masih harus latihan lagi yang banyak, soalnya masih suka bingung... mau nanya mentor tapi merasa kalo belom berusaha maksimal..
console.log(pyramid(3));
