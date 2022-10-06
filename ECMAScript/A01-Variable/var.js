//在ES6之前，变量是通过let关键字声明的
var varVariable=1;
function varFunction(){
    var varVariableInFunction=2;
    console.log(varVariable);
}
varFunction();
//console.log(varVariableInFunction);