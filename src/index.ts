import { Member } from 'util';

const me: User = new Member('yuki', 31);
console.log('会員:', me.name, me.age, me.constructor.name);
