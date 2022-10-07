//类声明
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person1("name", 11);
console.log("name of person1: " + person1.name);
console.log("name of person1: " + person1.age);

//类表达式
const Person2 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person2 = new Person2("name", 11);
console.log("name of person2: " + person2.name);
console.log("name of person2: " + person2.age);