export const PI = Math.PI;

export function degreesToRadians(degree) {
    return degree * PI / 180;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return PI * this.radius * this.radius;
    }
}