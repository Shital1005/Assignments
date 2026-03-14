let studentsName:string[]= ["Suresh","Mahesh","Naresh"]
let studentsmark:number[]=[75, 80, 82]
let updatedStudentsMaks:number[]=[]
let averageofUpdatedmarks=0;
for (let i=0;i<studentsmark.length;i++){
    updatedStudentsMaks[i]=studentsmark[i]+10;
    
}
console.log("after adding 10 marks for each student ");
 for (let i=0;i<studentsName.length;i++){
    console.log(studentsName[i],updatedStudentsMaks[i]);
 }

 for (let i=0;i<updatedStudentsMaks.length;i++){
    averageofUpdatedmarks+=updatedStudentsMaks[i]
 }
 let averageofnewmarks=averageofUpdatedmarks/updatedStudentsMaks.length
 console.log("average of updated marks",averageofnewmarks);