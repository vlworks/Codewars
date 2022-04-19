const cakes = (recipe, available) => Math.min(
    ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
);

// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));

// function cakes(recipe, available) {
//     const maxAvailable = [];
//
//     for (let item in recipe) {
//         if (item in available) {
//             const _result = Math.floor(available[item] / recipe[item]);
//             maxAvailable.push(_result);
//         } else {
//             return 0
//         }
//     }
//     return Math.min(...maxAvailable)
// }


