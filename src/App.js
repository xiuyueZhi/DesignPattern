import "./styles.css";
import Singleton from "./singleton";
import Factory from "./Factory";
import Prototype from "./Prorotype";
import ObserverPattern from "./Observer";
import CircleProxy from "./Proxy";
import Iterator from "./Iterator";
import Composite from "./Composite";
import Decorator from "./Decorator";
import Strategy from "./Strategy";

export default function App() {
  return (
    <div className="App">
      {/* <h1>单例模式</h1>
      <Singleton /> */}
      <h1>工厂模式</h1>
      <Factory />
      {/* <h1>原型模式</h1>
      <Prototype /> */}
      {/* <h1>观察者模式</h1>
      <ObserverPattern /> */}
      {/* <h1>代理模式</h1>
      <CircleProxy /> */}
      {/* <h1>迭代器模式</h1>
      <Iterator /> */}
      {/* <h1>组合模式</h1>
      <Composite /> */}
      {/* <h1>装饰器模式</h1>
      <Decorator /> */}
      {/* <h1>策略模式</h1>
      <Strategy /> */}
    </div>
  );
}
