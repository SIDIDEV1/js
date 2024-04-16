function isPalindrome(word) {
    const reverse = word.split('').reverse().join('')
    return reverse.toUpperCase() === word.toUpperCase()
}

const words = {
    Sidi: false,
    Sisis: true,
    kayak: true,
    mali: false
}

for (word in words) {
    if (isPalindrome(word) !== words[word]) {
        console.error(`isPalindrome(${word}) aurait du renvoyer ${words[word]}`);
    }
}