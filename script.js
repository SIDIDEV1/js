const YEARS = 0
const MONTHS = 1
const DAYS = 2


function addInterval(date, n, unit) {
    const parts = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ]
    parts[unit] += n
    return new Date(...parts)
}


const today = new Date()
const future = addInterval(today, 3, YEARS)

console.log(today);
console.log(future);