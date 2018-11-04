//  class的使用
class Animal {
  // 实例属性
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  // 实例方法
  func(){
    console.log(11111111);
  }
  // 在class内部通过static修饰的属性，叫做静态属性
  static info = '123'
  // 在class内部通过static修饰的方法，叫做静态方法
  static show(){
    console.log('show');
  }
}

const a1 = new Animal('大黄','555')
console.log(a1.name);
a1.func()

Animal.info
Animal.show()

