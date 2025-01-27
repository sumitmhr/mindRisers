
const a = 20;

const b = 100;

const calc = 'multiplication';

switch(calc){

  case 'addition':
    console.log(a+b);
    break;

  case 'subtraction':
    console.log(b-a);
    break;

  case 'multiplication':
    console.log(a*b);
    break;

  case 'division':
    console.log(b/a);
    break;

  default:
    console.log('The operator is not valid');
}