async function getUsers() {
    const r = await fetch('https://jsonplaceholder.typicode.com/users')
    if (r.ok === true) {
        return r.json()
    }

    throw new Error('Nous n\'avons pas pu recuperer les datas!')
}


getUsers()
    .then(body => console.log(body))
    .catch(e => console.error(e.message))

