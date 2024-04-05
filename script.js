const guest = 10

let value

while (guest !== value) {
  value = prompt("Guest the number") * 1

  if (guest !== value) {
    console.log('Dommage');
  }
}

console.log('Bravo');


