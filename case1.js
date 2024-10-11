var fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
];
// printing all
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Fruit No.${i + 1}: Name: ${fruits[i].fruitName}, Type: ${fruits[i].fruitType}, Stock: ${fruits[i].stock}`);
// }
// case 1
//   -------------------------------------------------------------------------
// number 1
var outputnumber1 = [];
for (var i = 0; i < fruits.length; i++) {
    var fruitNameLower = fruits[i].fruitName.toLocaleLowerCase();
    // there is no in?? 
    if (outputnumber1.indexOf(fruitNameLower) === -1) {
        outputnumber1.push(fruitNameLower);
    }
}
console.log('1. Buah yang dimiliki Andi', outputnumber1);
// let outputnumber2: string[] = [];
// let outputnumber2_2: string [] = [];
//   -------------------------------------------------------------------------
// number 2
var outputnumber2 = {};
for (var i = 0; i < fruits.length; i++) {
    var fruitTypeLower = fruits[i].fruitType.toLocaleLowerCase();
    var fruitName = fruits[i].fruitName;
    // Check if the container for this fruit type already exists, if not, create it
    if (!outputnumber2[fruitTypeLower]) {
        outputnumber2[fruitTypeLower] = [];
    }
    // Add the fruit name to the appropriate container
    outputnumber2[fruitTypeLower].push(fruitName);
}
// Determine the number of containers and list the fruits in each
var numberOfContainers = Object.keys(outputnumber2).length;
console.log("2. Number of containers needed: ".concat(numberOfContainers));
for (var type in outputnumber2) {
    if (outputnumber2.hasOwnProperty(type)) {
        var fruits_1 = outputnumber2[type];
        console.log("2. Fruits in the ".concat(type, " container: ").concat(fruits_1.join(', ')));
    }
}
//   -------------------------------------------------------------------------
// number 3
for (var type in outputnumber2) {
    if (outputnumber2.hasOwnProperty(type)) {
        var fruits_2 = outputnumber2[type];
        console.log("3. Number of fruits in the ".concat(type, " container: ").concat(fruits_2.length));
    }
}
// number 4
// number 2
var outputnumber_custom = {};
for (var i = 0; i < fruits.length; i++) {
    var fruitstypelowered = fruits[i].fruitType;
    var fruitslowered = fruits[i].fruitName;
    if (!outputnumber_custom[fruitstypelowered]) {
        outputnumber_custom[fruitstypelowered] = '';
    }
    outputnumber_custom[fruitstypelowered] = fruitslowered;
}
console.log(outputnumber_custom);
