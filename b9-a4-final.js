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


function deleteInvalids(array) {

    if (Array.isArray(array) === true) {

        const notunArray = [];

        for (const upadan of array) {
            if (typeof upadan === 'number' && isNaN(upadan) === false) {
                notunArray.push(upadan);
            }
        }
        return notunArray;
    } else {
        return "Invalid Array. Doya kore ekti valid array din.";
    }
}


function password(obj) {
    let jonmoShal = obj['birthYear'];

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

        return siteNameNew + '#' + obj.name + '@' + obj.birthYear;
    }
}


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
            sumOfIncome = sumOfIncome + upadan;
        }

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
