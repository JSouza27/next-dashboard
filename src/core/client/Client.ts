export default class Client {
  private id: string | null
  private name: string
  private age: number

  constructor(name: string, age:number, id:string) {
    this.id = id
    this.age = age,
    this.name = name
  }

  static empty() {
    return new Client('', 0, null)
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getAge() {
    return this.age
  }
}
