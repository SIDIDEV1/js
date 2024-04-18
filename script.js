// const t = setInterval(() => {
//     console.log(1)
// }, 1000);

// setTimeout(() => {
//     clearInterval(t)
// }, 5000)


function decompte(n) {
    const t = setInterval(() => {
        n--
        console.log(n);
        if (n === 0) {
            clearInterval(t)
        }
    }, 1000)


}

decompte(3)