const creditScore:number=720;
const income:number=55000.0;
const isEmployed:boolean=true;
const debtToIncomeRatio:number=35.0;
/*
function loaneligiblity(){
creditScore
income
isEmployed
debtToIncomeRatio
};*/
{

if (creditScore>=750) {
    console.log("loan is automatically approved");

}else if (creditScore >=650 && creditScore <=750)
{
    console.log("additional checks are performed.")
     if (income >=50000){
        console.log (" loan to be considered");
    if (isEmployed)
    {
        if (debtToIncomeRatio<=40)
            console.log("loan is approved.")
         if (debtToIncomeRatio>=40)
            console.log("loan is denied")
        
        else {console.log ("loan is denied due to unemployment");

        }
    }
    else {
        console.log("loan is denied due to low income")
    }
}
}
else {
console.log("Loan is denied due to low credit score");
}
}