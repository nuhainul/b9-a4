/**
 * Problem-01 : Help The Zoo Manager
 * Function Name Must be calculateMoney()
 * 
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


// console.log(calculateMoney(10)); // delete after-work

/**
 * Problem-02 : Good Name , Bad Name 
 * Function Name Must be checkName()
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


// console.log('Salman', checkName('Salman')); // delete after-work
// console.log('RAFEE', checkName('RAFEE')); // delete after-work
// console.log('Jhankar', checkName('Jhankar')); // delete after-work
// console.log(199, checkName(199)); // delete after-work
// console.log('["Rashed"]', checkName(["Rashed"])); // delete after-work


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



/**
 * Problem 04 : Make A Great Password 
 * Function Name Must be password()
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

// console.log(monthlySavings(arr, livingCost));
console.log(monthlySavings([1000, 2000, 3000], 5400)); //expected 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); //expected 500
console.log(monthlySavings([900, 2700, 3400], 10000)); //expected earn more
// console.log(monthlySavings([1000, 2000, 3000], '5400')); //expected 0
// console.log(15, monthlySavings([1000, 2000, 3000], NaN)); //expected 0
console.log(monthlySavings(100, [900, 2700, 3400])); //expected invalid input 