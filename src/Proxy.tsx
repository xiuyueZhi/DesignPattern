interface Shape {
  draw(): string;
}

class Circle implements Shape {
  draw(): string {
    return "circle";
  }
}

class CircleProxy implements Shape {
  circle: Circle;
  constructor() {
    this.circle = new Circle();
  }
  draw(): string {
    this.log();
    return this.circle.draw();
  }
  log(): void {
    console.log("draw circle");
  }
}

const circle = new Circle();
const circleProxy = new CircleProxy();

console.log("original circle：", circle.draw());
console.log("proxy circle：", circleProxy.draw());

export default function ProxyPattern() {
  return <div></div>;
}
