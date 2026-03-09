//Syntax for java script

// Decleartion variable=data

//Decleration means -nature of data 
//varibale means -name of the memory location/refrence for data
//= is a assignment operator

//var let and const are used for decaleartion
//var are not use currently 

//4 parameter on which these three keyword are diffrentiate

//1.initilization
//2.Re-decleration
//3.Reassignment
//4.scope
//initialization means adding the value at the time of declraetion
const e = 10  // for const it is mandatory to add the value
let a;
var b;
// for let and var it is not mandatory


//reassignment means change the declear value
//const e=20 //not allowed in const
a = 25 //not allowed in let
b = 35

//Redecaleartion means using the same varibale to store the diffrenet data
//const e=25 //not allowed
//let a=21// not allowed
var b = 45 //allowed 


//scope: functional and block scope

{
    const x = 20;
    let y = 30;
    var z = 40;

    console.log(x)
    console.log(y)
    console.log(z)
}

{
    const x = 20;
    let y = 30;
    var z = 40;


}
//console.log(x) //Const is a block scope
//console.log(y) //Const is a block scope
console.log(z) //Var is a function scope


// Rules of variables
//1.varibale name must not be reserved keyword
//2.varible name should be uniqe
//3. varible name should not conatain whitespace
//4.varibel name must not conatin special character ecpect ($ --)
//5. variable name not start with number
//6.varible name not contain literal words (true,false)