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
}

for (let i = 0; i < amountOfTranscation.length; i++) {
    if (amountOfTranscation[i] > 0) {
        // console.log("find the amount of credit", amountOfTranscation[i]);
        // totalCreditAmount++;
        totalCreditNumber++;
    }

}
for (let i = 0; i < amountOfTranscation.length; i++) {
    if (amountOfTranscation[i] < 0) {
        // console.log("finding the amount of debit", amountOfTranscation[i]);
        // totaldebitAmount++;
        totaldebitNumber++;
    }
}


console.log("total number of credit",totalCreditNumber);
console.log("total number of debit",totaldebitNumber);
console.log(totalCreditAmount);
console.log(totaldebitAmount);
console.log(finalamountreamining);
console.log("total number of suspiciousTransaction",suspicisousTranscationAmount);
