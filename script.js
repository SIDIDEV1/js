function addDate(date, days) {
    const newDate = new Date(date.getTime())
    newDate.setDate(newDate.getDate() + days)
    return newDate
}


const today = new Date()
const tomorrow = addDate(today, 1)

console.log(today);
console.log(tomorrow);