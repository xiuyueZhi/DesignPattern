import { cloneDeep } from "lodash";
interface IStrategy {
  doAlgorithm(data: number[]): number[];
}

class SortStrategy implements IStrategy {
  doAlgorithm(data: number[]): number[] {
    return data.sort();
  }
}

class ReverseStrategy implements IStrategy {
  doAlgorithm(data: number[]): number[] {
    return data.reverse();
  }
}

class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }
  doAlgorithm(data: number[]): number[] {
    return this.strategy.doAlgorithm(data);
  }
}

const data = [2, 1, 4, 3, 7, 8];
const sortContext = new Context(new SortStrategy());
console.log("sort data：", sortContext.doAlgorithm(cloneDeep(data)));
// const reverseContext = new Context(new ReverseStrategy());
sortContext.setStrategy(new ReverseStrategy());
console.log("reverse data：", sortContext.doAlgorithm(cloneDeep(data)));

export default function Strategy() {
  return <div></div>;
}
