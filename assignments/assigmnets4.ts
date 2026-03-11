let amountOfTranscation: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let totalCreditAmount: number = 0;
let totaldebitAmount: number = 0;
let totalCreditNumber: number = 0;
let totaldebitNumber: number = 0;
let suspicisousTranscationAmount: number = 0;
let finalamountreamining: number = 0;


for (let i = 0; i < amountOfTranscation.length; i++) {

    if (amountOfTranscation[i] > 10000 || amountOfTranscation[i] < -10000) {
        console.log("find the suspicious transcation", amountOfTranscation[i]);
        suspicisousTranscationAmount++;
    }
    if (amountOfTranscation[i] > 0) {
        totalCreditAmount += amountOfTranscation[i]
        totalCreditNumber++;
    }
    if (amountOfTranscation[i] < 0) {
        totaldebitAmount += amountOfTranscation[i]
        totaldebitNumber++;
    }
    finalamountreamining+=amountOfTranscation[i];
}



console.log("total number of credit", totalCreditNumber);
console.log("total number of debit", totaldebitNumber);
console.log("total credited amount", totalCreditAmount);
console.log("total debited amount", totaldebitAmount);
console.log("total reamining amount in a bank account",finalamountreamining);
console.log("total number of suspiciousTransaction", suspicisousTranscationAmount);
