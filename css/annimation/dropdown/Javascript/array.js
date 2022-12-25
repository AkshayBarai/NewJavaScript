let color = ['red','white','black','orange','blue',5522,123]
console.log(typeof(color));
console.log(color.length);
console.log([color.length-1]);
console.log(color[color.length-1]);
console.log(color);
console.log(color[ 2]);
color [2] = 'pink'
console.log(color);
color [9] = 'black'
console.log(color);

var cars = ['nono','shift','marcedes','volve' ,'A11','A12']
console.log(cars.toString());
console.log(cars.join('\n'));
console.log(cars.pop());
console.log(cars);
cars.push('mini coper');
console.log(cars);
var cars1 = ['nono','shift','marcedes','volve' ,'A11','A12']
console.log(cars1.shift());
console.log(cars1);

console.log(cars1.unshift('b12'));
console.log(cars1);

delete cars1[3];
console.log(cars1);

var no1 = [10,20,30]
var no2 = [40,60,80]
no3 = ['test1','test2']
var conNo = no1.concat(no2,no3)
console.log(conNo);

let days =['Mon','Tue','Thu','fri']
days.splice(1,0,'Wes')
console.log(days);
console.log(days.slice(1,3));

const number = [10,20,30,40,50]
const number1 = number.slice(1,3)
console.log(number1);

const number2 = [10,20,30,40,50]
 const number3 = number2.slice(-3,-1)
console.log(number3);







