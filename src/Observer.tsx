class Subject {
  observers: Observer[] = [];
  num: number = 0;
  add(): void {
    console.log("publisher add");
    this.num++;
    this.notify();
  }
  observer(observer: Observer): void {
    this.observers.push(observer);
  }
  unObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(): void {
    this.observers.forEach((item) => {
      item.update(this);
    });
  }
}
interface Observer {
  update(subject: Subject): void;
}

class ObserverA implements Observer {
  update(subject: Subject): void {
    console.log("ObserverA get notify ：", subject.num);
  }
}

class ObserverB implements Observer {
  update(subject: Subject): void {
    console.log("ObserverB get notify ：", subject.num);
  }
}

const subject = new Subject();
const observerA = new ObserverA();
const observerB = new ObserverB();
subject.observer(observerA);
subject.observer(observerB);
subject.add();

export default function ObserverPattern() {
  return <div></div>;
}
