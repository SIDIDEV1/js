const p = new Promise((resolve, reject) => {
    resolve(2)
})


p.then((n) => {
    console.log(n);
    throw new Error('Zbiii')
}).then((n) => {
    console.log(n);
}).catch(e => console.log(e.message))
    .finally(() => console.log('finaly'))