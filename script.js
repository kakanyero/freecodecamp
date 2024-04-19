var x=24;
if (true){
    var x=20;
    console.log(x);
}
console.log(x);
//using var the variable become hoited ie get moved to the 
//top of the scope no matter where they are declred that is why the answer here is 
//20
//20

/*
let x=24;
if (true){
    let x=20;
    console.log(x);
}
console.log(x);



here the answer is
20
24
because of no hoisting
*/