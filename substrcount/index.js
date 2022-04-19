function count (string) {
    if (!string.trim()) return {}

    const result = {}
    string
        .trim()
        .split('')
        .forEach( char => {
            if (char in result) {
                result[char] += 1
            } else {
                result[char] = 1
            }
        })
    return result
}

console.log(count('aba'))
console.log(count(''))
