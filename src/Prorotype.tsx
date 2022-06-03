interface Prototype<T> {
  clone(): T;
}
class Shape implements Prototype<Shape> {
  color: string;
  constructor(source?: Shape) {
    this.color = source?.color;
  }
  clone(): Shape {
    return new Shape();
  }
}

class Circle extends Shape {
  radius: number;
  constructor(source?: Circle) {
    super(source);
    this.radius = source?.radius;
  }
  clone(): Circle {
    return new Circle(this);
  }
}

const circle: Circle = new Circle();
circle.radius = 1;
circle.color = "red";
const circleClone: Circle = circle.clone();

console.log("circleClone：", circleClone);
console.log("circleClone === circle：", circleClone === circle);

export default function PrototypePattern() {
  return <div></div>;
}
