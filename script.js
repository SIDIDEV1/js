function canDrive(age, contry) {
  if (age > 18 && contry === 'FR' || age > 18 && contry === 'EN') {
    return true
  }
  return false
}

console.log(canDrive(19, 'FR'));