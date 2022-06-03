interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}
interface Collection<T> {
  getIterator(): IIterator<T>;
}

class ArrayIterator<T> implements IIterator<T> {
  private index: number = 0;
  private arrayCollection: ArrayCollection<T>;
  constructor(arrayCollection: ArrayCollection<T>) {
    this.arrayCollection = arrayCollection;
  }
  hasNext(): boolean {
    return this.index < this.arrayCollection.getArr()?.length;
  }
  next(): T {
    return this.index < this.arrayCollection.getArr()?.length
      ? this.arrayCollection.getArr()[this.index++]
      : undefined;
  }
}

class ArrayCollection<T> implements Collection<T> {
  private arr: T[] = [];
  push(value: T) {
    this.arr.push(value);
  }
  getArr(): T[] {
    return this.arr;
  }
  getIterator(): IIterator<T> {
    return new ArrayIterator<T>(this);
  }
}

const stringArr = new ArrayCollection<string>();
stringArr.push("str1");
stringArr.push("str2");
const iterator = stringArr.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

export default function Iterator() {
  return <div></div>;
}
