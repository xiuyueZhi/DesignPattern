interface Shape {
  draw(): string;
}
class Cicle implements Shape {
  draw(): string {
    console.log("draw Circle");
    return "Cicle";
  }
}
class Triangle implements Shape {
  draw(): string {
    console.log("draw Triangle");
    return "Triangle";
  }
}
class Square implements Shape {
  draw(): string {
    console.log("draw Square");
    return "Square";
  }
}
abstract class ShapeFactory {
  abstract getShape(): Shape;
}
class CicleFactory extends ShapeFactory {
  getShape(): Shape {
    return new Cicle();
  }
}
class TriangleFactory extends ShapeFactory {
  getShape(): Shape {
    return new Triangle();
  }
}
class SquareFactory extends ShapeFactory {
  getShape(): Shape {
    return new Square();
  }
}

console.log("圆：", new CicleFactory().getShape());
console.log("三角形：", new TriangleFactory().getShape());
console.log("正方形", new SquareFactory().getShape());

export default function FactoryPattern() {
  return <div></div>;
}
