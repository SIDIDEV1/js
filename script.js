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


async function test() {
    try {
        await waitAndFail(2000)
        console.log('One');
        await wait(1000)
        console.log('two');
    } catch (error) {
        console.log('Error');
    }

}

const sidi = async () => {
    await wait(1000)
    console.log('Sidi');
}


const fn = async function () {
    await wait(1000)
    console.log('fn');
}


test()
sidi()
fn()