function addDate(date, days) {
    const newDate = new Date(date.getTime())
    newDate.setDate(newDate.getDate() + days)
    return newDate
}

const MONTHS = 'months'
const DAYS = 'days'
const YEARS = 'years'

function addInterval(date, n, unit) {
    const newDate = new Date(date.getTime())
    if (unit === MONTHS) {
        newDate.setMonth(newDate.getMonth() + n)
        return newDate
    } else if (unit === DAYS) {
        newDate.setDate(newDate.getDate() + n)
        return newDate
    } else {
        newDate.setFullYear(newDate.getFullYear() + n)
        return newDate
    }
}


const today = new Date()
const future = addInterval(today, 3, MONTHS)

console.log(today);
console.log(future);