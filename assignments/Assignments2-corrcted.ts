function checkLoaneligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {
    if (creditScore >= 750) {
        console.log(" loan is automatically approved");
    } else if (creditScore >= 650 && creditScore < 750) {
        console.log("additional checks are performed");
        if (income >= 50000.0) {
            console.log(" loan to be considered.");
            if (isEmployed) {
                if (debtToIncomeRatio <= 40) { console.log("loan is approved."); }
                else {
                    console.log(" Loan is denied due to high debt-to-income ratio.");
                }
            } else {
                console.log("loan is denied due to unemployment");
            }
        } else {
            console.log("Loan is denied due to low income");
        }
    } else {
        console.log("Loan is denied due to low credit score");
    }
}
checkLoaneligibility("John Doe", 720, 55000.0, true, 45.0)