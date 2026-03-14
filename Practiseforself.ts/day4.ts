let amontOfTransction: number[] = [50000, -2000, 3000, -15000, -200, -300, 400, -3000];
let totalcredited: number = 0;
let totaldebited: number = 0;
let totalcreditedamount: number = 0;
let totaldebitedamount: number = 0;

let totalsuspicioustransction: number = 0;

for (let i = 0; i < amontOfTransction.length; i++) {
    if (amontOfTransction[i] > 10000 || amontOfTransction[i] < -10000) {
        console.log("total suspicious transction", amontOfTransction[i]);
        totalsuspicioustransction++;
    } if(amontOfTransction[i]>0){
        totalcreditedamount+= amontOfTransction[i]
        totalcredited++;
    }if (amontOfTransction[i]<0){
        totaldebitedamount+=amontOfTransction[i]
        totaldebited++;
    }
  
} let totalaremainingamount:number=totalcreditedamount+totaldebitedamount
 

console.log("total suspicious transction find ",totalsuspicioustransction)
console.log("total credited amount",totalcreditedamount);
console.log("total credited number",totalcredited);
console.log("total debited amount",totaldebitedamount);
console.log("total debited number",totaldebited);
console.log("total remaining amount in bank",totalaremainingamount)