fetch('https://jsonplaceholder.typicode.com/usedrs')
    .then(r => r.json())
    .then(body => console.log(body))
    .catch(e => console.log(e))

