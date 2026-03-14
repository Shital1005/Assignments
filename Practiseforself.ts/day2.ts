let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 15000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

if (creditScore >= 750) {
    console.log("loan is approved due to high credit score");
}
else if (creditScore >= 650 && creditScore <= 750) {
    console.log("Due to credit score match criteria additional needs to check")
    if (income >= 50000.0) {
        if (isEmployed) {
            if (debtToIncomeRatio <= 40) {
                console.log("loan is approved due to all criteria is match")
            }else {
                console.log("loan is denied due to high debt to income ratio");
            }
        } else {
            console.log("loan is rejected due to unemployment");
        }
    } else {
        console.log("loan is rejeted due to low income")
    }
}else {
    console.log("loan is rejected due to low credit score");
}