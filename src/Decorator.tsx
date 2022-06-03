interface Shape {
  draw(): string;
}
class Circle implements Shape {
  draw(): string {
    return "circle";
  }
}

class ShapeDecorator implements Shape {
  shape: Shape;
  constructor(shape: Shape) {
    this.shape = shape;
  }
  draw() {
    return `ShapeDecorator(${this.shape.draw()})`;
  }
}

class ShapeDecoratorA extends ShapeDecorator {
  draw() {
    return `ShapeDecoratorA(${this.shape.draw()})`;
  }
}
class ShapeDecoratorB extends ShapeDecorator {
  draw() {
    return `ShapeDecoratorB(${this.shape.draw()})`;
  }
}

const circle = new Circle();
console.log(circle.draw());

const circleDecorator = new ShapeDecoratorA(circle);
const shapeDecorator = new ShapeDecoratorB(circleDecorator);
console.log(shapeDecorator.draw());

export default function Decorator() {
  return <div></div>;
}
