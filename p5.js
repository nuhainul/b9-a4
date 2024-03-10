
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