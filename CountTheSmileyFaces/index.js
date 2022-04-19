//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(face => face.match(/^(:|;)(~|-)?(D|\))/m)).length
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;