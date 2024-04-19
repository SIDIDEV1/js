const YEARS = 0
const MONTHS = 1
const DAYS = 2


function addInterval(date, interval) {
    const parts = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ]
    for (const [unit, value] of Object.entries(interval)) {
        parts[unit] += value
    }
    return new Date(...parts)
}


const today = new Date()
const future = addInterval(today, {
    [MONTHS]: 1,
    [YEARS]: 1,
    [DAYS]: 2,
})

console.log(today);
console.log(future);