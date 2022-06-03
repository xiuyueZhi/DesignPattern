class Singleton {
  private static singleton: Singleton;
  private constructor() {}
  // private constructor(v?: string) {}
  public static getInstance() {
    if (!Singleton.singleton) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}
// type MessageType = "image" | "audio";
// type Message = {
// id: number;
// type: MessageType;
// content: string;
// };
// function getMessage(id: number): Message | undefined;
// function getMessage(type: MessageType): Message[];
// function getMessage(query: any): any {
//   if (typeof query === "number") {
//     return ''
//   } else {
//     return ''
//   }
// }
// console.log(keyof any)
// getMessage('string')
const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log("singleton：", singleton);
// console.log(111,Singleton.singleton)
console.log("创建的实例是否是同一个：", singleton === singleton2);
export default function SingletonPattern() {
  return <div></div>;
}
