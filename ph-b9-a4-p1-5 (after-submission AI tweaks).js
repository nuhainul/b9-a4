/** manual 
 * Problem-01 : Help The Zoo Manager
 * Function Name Must be calculateMoney()
 * 
 */

/** Mintlify AI
 * The function calculates the total profit by subtracting the total expenses from the daily ticket
 * sales.
 * @param ticketBikri - The parameter `ticketBikri` represents the number of tickets sold.
 * @returns The function `calculateMoney` returns the total amount of money that will be left after
 * deducting the expenses.
 */
function calculateMoney(ticketBikri) {
    if (ticketBikri < 0 || typeof ticketBikri !== 'number') {
        return "Invalid Number. Doya kore ekti valid number din";
    } else {
        protidinSale = 120 * ticketBikri;

        darwanKhoroch = 500 * 1;
        staffKhoroch = 50 * 8;
        totalKhoroch = darwanKhoroch + staffKhoroch;

        totalThake = protidinSale - totalKhoroch;
        return totalThake;
    }
}

console.log(calculateMoney(10)); // delete after-work

//======================================================================

/** manual
 * Problem-02 : Good Name , Bad Name 
 * Function Name Must be checkName()
*/

/** Mintlify AI
 * The function `checkName` takes a name as input and returns "Good Name" if the last letter of the
 * name is a vowel or 'w', and "Bad Name" otherwise.
 * @param naam - The parameter `naam` represents a name that is passed to the `checkName` function.
 * @returns The function `checkName` returns "Good Name" if the last character of the input string is
 * 'a', 'y', 'i', 'e', 'o', 'u', or 'w'. Otherwise, it returns "Bad Name". If the input is not a
 * string, it returns "invalid".
 */
function checkName(naam) {
    if (typeof naam === 'string') {
        naam = naam.toLowerCase();
        if (
            naam[naam.length - 1].includes('a') ||
            naam[naam.length - 1].includes('y') ||
            naam[naam.length - 1].includes('i') ||
            naam[naam.length - 1].includes('e') ||
            naam[naam.length - 1].includes('o') ||
            naam[naam.length - 1].includes('u') ||
            naam[naam.length - 1].includes('w')
        ) {
            return "Good Name";
        }
        return "Bad Name";
    } else {
        return "invalid";
    }
}


console.log('Salman', checkName('Salman')); // delete after-work
console.log('RAFEE', checkName('RAFEE')); // delete after-work
console.log('Jhankar', checkName('Jhankar')); // delete after-work
console.log(199, checkName(199)); // delete after-work
console.log('["Rashed"]', checkName(["Rashed"])); // delete after-work

//======================================================================

/** manual
 * Problem 03 : Virus in my Array 
 * Function Name Must be deleteInvalids()
*/

/** Mintlify AI
 * The `deleteInvalids` function takes an array as input and returns a new array with only the valid
 * numbers, filtering out any non-numeric values.
 * @param array - The `array` parameter is an array that contains various elements, including numbers,
 * strings, objects, and other arrays.
 * @returns The code will return the following:
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

//======================================================================


/** manual
 * Problem 04 : Make A Great Password 
 * Function Name Must be password()
*/

/** Mintlify AI
 * The password function takes an object as input and returns a password string based on the values of
 * the object's properties.
 * @param obj - The `obj` parameter is an object that contains the following properties:
 * @returns The code will return the following:
 */
function password(obj) {
    let jonmoShal = obj['birthYear'];
    // console.log(jonmoShal.toString().length);
    // console.log(obj.birthYear().length);
    if (
        typeof obj.name === 'undefined' ||
        typeof obj.birthYear === 'undefined' ||
        typeof obj.siteName === 'undefined' ||
        jonmoShal.toString().length !== 4
    ) {
        return "invalid";
    } else {
        const siteName1 = obj.siteName[0].toUpperCase();
        const siteName2 = obj.siteName.slice(1);
        const siteNameNew = siteName1 + siteName2;
        // console.log(obj.siteName1);
        // console.log(obj.siteName2);
        // console.log(siteNameNew);
        
        return siteNameNew + '#' + obj.name + '@' + obj.birthYear;
    }
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

//======================================================================


/** Mintlify AI
 * The function `monthlySavings` calculates the total savings per month based on an array of incomes
 * and the cost of living, taking into account a tax deduction for incomes above a certain threshold.
 * @param arr - The `arr` parameter is an array of numbers representing monthly incomes.
 * @param livingCost - The `livingCost` parameter represents the monthly cost of living expenses.
 * @returns The code will return the following:
 */
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) === true && typeof livingCost === 'number' && isNaN(livingCost) === false) {

        let incomeAfterTax = [];
        let totalSavings = 0;
        let sumOfIncome = 0;

        for (const item of arr) {
            if (item >= 3000) {
                incomeAfterTax.push(item * (80 / 100));
            } else {
                incomeAfterTax.push(item);
            }
        }

        for (const upadan of incomeAfterTax) {
            // console.log(upadan);
            sumOfIncome = sumOfIncome + upadan;
            // console.log(10, sumOfIncome);
        }
        // return sumOfIncome;

        totalSavings = sumOfIncome - livingCost;
        if (totalSavings >= 0) {
            return totalSavings;
        } else {
            return 'earn more';
        }
    } else {
        return "invalid input";
    }
}

console.log(monthlySavings(arr, livingCost));
console.log(monthlySavings([1000, 2000, 3000], 5400)); //expected 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); //expected 500
console.log(monthlySavings([900, 2700, 3400], 10000)); //expected earn more
console.log(monthlySavings([1000, 2000, 3000], '5400')); //expected 0
console.log(15, monthlySavings([1000, 2000, 3000], NaN)); //expected 0
console.log(monthlySavings(100, [900, 2700, 3400])); //expected invalid input 

//======================================================================