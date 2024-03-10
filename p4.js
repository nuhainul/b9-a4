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
