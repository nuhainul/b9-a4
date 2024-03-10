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