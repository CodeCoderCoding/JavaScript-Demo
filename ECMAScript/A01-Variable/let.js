//在ES6及之后，变量是通过let关键字声明的
let letVariable=1;
function letFunction(){
    let letVariableInFunction=2;
    console.log(letVariable);
}
letFunction();
console.log(letVariableInFunction);