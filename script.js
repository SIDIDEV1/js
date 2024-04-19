const a = new AbortController()
/**
 * 
 * 
 * 
 */
Promise.race([
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=6&_delay=5000', { signal: a.signal }),
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=3', { signal: a.signal })
])
    .then(r => r.json())
    .then(body => {
        a.abort()
        console.log(body)
    })
    .catch(e => console.error(e.message))

