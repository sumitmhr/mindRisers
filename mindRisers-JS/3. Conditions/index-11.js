
let a = 70;
let b = 90;

const m = a || b || 'hello jee';
const n = b || a || 'hello jee';
const o = 'hello jee' || a || b;

console.log(m);
console.log(n);
console.log(o);