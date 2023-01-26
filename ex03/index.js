function rot13(str) {
    let decodedResult = "";
    let alphabetStart = "abcdefghijklm".toUpperCase();
    let alphabetEnd = "nopqrstuvwxyz".toUpperCase();

    for (let i = 0; i < str.length; i++) {
        let letterToCode = str[i];

        if (alphabetStart.indexOf(letterToCode) >= 0) {

            decodedResult += alphabetEnd[alphabetStart.indexOf(letterToCode)];
            console.log('1', decodedResult);
        } else if (alphabetEnd.indexOf(letterToCode) >= 0) {

            decodedResult += alphabetStart[alphabetEnd.indexOf(letterToCode)];
            console.log('2', decodedResult);
        } else {

            decodedResult += letterToCode;
            console.log('3', decodedResult);
        }
    }



    return decodedResult;
}

console.log(rot13("SERR PBQR PNZC"));

/*
2 F
 
1 FR
2 FRE
2 FREE
3 FREE 
2 FREE C
1 FREE CO
2 FREE COD
2 FREE CODE
3 FREE CODE 
2 FREE CODE C
2 FREE CODE CA
2 FREE CODE CAM
1 FREE CODE CAMP
FREE CODE CAMP
 */