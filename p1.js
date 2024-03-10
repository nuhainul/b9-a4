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