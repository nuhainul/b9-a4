/**
 * Problem 03 : Virus in my Array 
 * Function Name Must be deleteInvalids()
 */

function deleteInvalids(array) {

    if (Array.isArray(array) === true) {

        const notunArray = [];

        for (const upadan of array) {
            if (typeof upadan === 'number' && isNaN(upadan) === false) {
                notunArray.push(upadan);
            }
            // console.log(notunArray);
        }
        return notunArray;
        // return "it is an array";
    } else {
        return "Invalid Array. Doya kore ekti valid array din.";
    }
}

console.log('1.', deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // delete after-work
console.log('2.', deleteInvalids(["1", { num: 2 }, NaN])); // delete after-work
console.log('3.', deleteInvalids([1, 2, -3])); // delete after-work
console.log('4.', deleteInvalids({ num: [1, 2, 3] })); // delete after-work



