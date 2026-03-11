let studentName:string[]=["Suresh","Mahesh","Naresh"];
let studentMarks:number[]=[75, 80, 82];
let updatedMarks:number[]=[];

for (let i=0;i<studentMarks.length;i++)
{
    updatedMarks[i]=studentMarks[i]+=10;
}
console.log("after adding 10 marks for each student");
 
for(let i=0;i< studentName.length;i++){
    console.log(studentName[i] , updatedMarks[i]);
}

let sumOfUpdatedMarks=0;
for (let i=0;i< updatedMarks.length;i++){
sumOfUpdatedMarks+=updatedMarks[i];
}

let averageMarks=sumOfUpdatedMarks/updatedMarks.length;

console.log("after Added 10 marks for each student average of new marks is", averageMarks);