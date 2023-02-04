/**
 * 会員クラス
 */
export class Member implements User, Employee {
  name: string;
  age: number;
  role: string;
  constructor(name: string, age: number, role: string = 'manager') {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}
