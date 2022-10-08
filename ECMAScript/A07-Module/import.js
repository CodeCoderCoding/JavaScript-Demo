import {PI, Circle, degreesToRadians} from "./export.js";

let radian = degreesToRadians(90);
console.log(radian);

let myCircle = new Circle(2);
let myArea = myCircle.area();
console.log("myArea: " + myArea);