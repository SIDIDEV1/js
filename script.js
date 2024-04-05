const guest = 10

let value

while (guest !== value) {
  value = prompt("Guest the number") * 1

  if (value > guest) {
    console.log('moins');
  } else if (value < guest) {
    console.log('plus');
  }
}

console.log('Bravo');



// do {
//   value = prompt("Guest the number") * 1
//   if (guest !== value) {
//     console.log('Dommageeeee');
//   }
// } while (guest !== value);

// console.log('Bravo');
