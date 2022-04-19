function zeros(num) {

    const factorial = (number) => {
        if (number === 0) return 0
        if (number === 1) return number
        return number * factorial(number - 1)
    }

    const result = factorial(num)
    if (result === 0) return 0
    const str = result.toString().match(/0+$/g)
    return str && (str[0].length > 0) ? str[0].length : 0
}


console.log(zeros(12))
console.log(zeros(0))
