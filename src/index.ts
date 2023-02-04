import { User } from 'util';

const me: User = new User('yuki', 31);
console.log(me.name, me.age, me.constructor.name);
