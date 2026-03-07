console.log("launch the chrome browser");
console.log("enter the url www.payroll.com");
console.log("enter the user name");
console.log("enter the password");
console.log("to verify the homepage");
console.log("to verify the emp details");
logoutandverify();

///To Verify the emp address details
console.log("launch the chrome browser");
console.log("enter the url www.payroll.com");
console.log("enter the user name");
console.log("enter the password");
console.log("to verify the homepage");
console.log("to verify the emp add details");
logoutandverify();

//To verify the emp bank details 
loginandverify('payroll.com');
console.log("to verify the emp bank details");
logoutandverify();

function loginandverify(url){
    console.log("launch the chrome browser");
console.log(`enter the ${url}`);
console.log("enter the user name");
console.log("enter the password");
console.log("to verify the homepage");
}

function logoutandverify(){
console.log("click on lohout button");
console.log("to verify the system log out successfully")
}