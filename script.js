console.log("1")

setTimeout(()=> {
  console.log("2");
}, 0);

new Promise((resolve) => {
  console.log("3")
  resolve()
})
  .then(()=> console.log("4"))
  .finally(() => console.log("5"))
  .then(()=> console.log("6"))

console.log("7");


// 1, 3, 7, 4, 5, 6, 2
