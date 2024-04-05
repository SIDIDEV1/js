let number = prompt("tape number beetween 0 and 10");

if (number > 10 || number < 0) {
  console.log(
    "le nombre n'est pas entre 0 et 10. The number was :",
    number
  );
} else {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }

  // while (number >= 0) {
  //   console.log(number);
  //   number--;
  // }
}