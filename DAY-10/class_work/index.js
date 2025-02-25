// console.log(this);
// let obj = {
//     name :"Towhid Anuar",
//     Class : "B-tech",
//     myFunction : function(){
//         console.log(this.name,this.class)
//         console.log("I am method inside object");
//     },
//     subjects :["DBMS","CN","AI","ML","DL"],
//     newObj: {
//         1:12,
//         myNewFunction : function(){
//             console.log(this);
//         }
//     }
// }

// console.log(obj.myFunction())


// condition

// let num1 = 30, num2 = 20 ;

// if(num1<num2){
//     console.log(`${num1} is less than ${num2}`);
// }
// if(num1<num2){
//     console.log(`${num1} is greater than ${num2}`);
// }
// else if(num1==num2){
//     console.log(`${num1} is equal to ${num2}`);
// }else {
//     console.log("No point of me here")
// }


// let suppose you have one num as input you have to check if num is multiple of 3 then print "Fizz", if num is multiple of 5 then print"Buzz".If num is multiple of both 3 and 5 then print "Fizz Buzz".

// let num = 30;
// if(num%3 == 0 && num%5 == 0){
//     console.log("Fizz Buzz");
// }
// else if (num%3 == 0){
//     console.log("Fizz");
// }
// else if(num%5 == 0){
//     console.log("Buzz");
// }
// else{
//     console.log(`${num} is not multiple of 3 or 5`);
// }

// For loop

let num=10;

for(let i=0; i<num; i++)
    console.log(i, num)

let arr = [1,2,3,4,5,6,7,8]

for(let i=1; i<arr.length; i++){
    console.log(arr[i], i);
}

let str = "Amarjit";
for(let i=0; i<str.length; i++){
    console.log("a"+str[i]+"b")
}
