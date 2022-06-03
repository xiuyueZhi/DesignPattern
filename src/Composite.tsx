abstract class Component {
  protected parent: Component;
  setParent(parent: Component): void {
    this.parent = parent;
  }
  getParent(): Component {
    return this.parent;
  }
  public add(component: Component): void {}
  public remove(component: Component): void {}
  public isComposite(): boolean {
    return false;
  }
  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}
class Compose extends Component {
  protected children: Component[] = [];
  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }
  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }
  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

const tree = new Compose();
const branch1 = new Compose();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Compose();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log(tree.operation());
console.log(11, tree);

export default function Composite() {
  return <div></div>;
}
