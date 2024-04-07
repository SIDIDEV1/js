const random = Math.floor(Math.random() * (10 + 1))

console.log(random);

function isRight(n) {
  return random === n
}


function guess() {
  const number = prompt('guess the value');
  return isRight(number)
}


for (i = 0; i < 3; i++) {
  if (guess()) {
    console.log('Bravo')
    break
  } else if (i === 2) {
    console.log('-_- vous avez perdu')
  }
}


