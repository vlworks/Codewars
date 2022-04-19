function findOutlier(integers){
    const _result = {
        odd: [],
        integer: []
    }

    integers.forEach( item => {
        item % 2 === 0 ? _result.integer.push(item) : _result.odd.push(item)
    })

    for (let key in _result) {
        if (_result[key].length === 1) return _result[key][0]
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
