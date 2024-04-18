function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}


function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration)
    })
}


wait(2000)
    .then((n) => {
        console.log('first watting : ' + n);
        return wait(1000)
    })
    .then((n) => {
        console.log('first watting : ' + n);
        return waitAndFail(2000)
    })
    .catch((e) => {
        console.log(e);
    })