/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/


function SeriesSum(n){
  if (n === 0){
    return "0.00"
  }
 let patern = 4 
 let series = [1]
 for (i = 1 ;  series.length < n;) {
  series.push(i / patern)  
   patern = patern + 3
 }
 const res = series.reduce((a, b) => a + b)
 return res.toFixed(2)
}


console.log(SeriesSum(1)) //"1.00"
console.log(SeriesSum(2)) //"1.25"
console.log(SeriesSum(3)) //"1.39"
console.log(SeriesSum(4)) //"1.49"
console.log(SeriesSum(0)) //"0.00"