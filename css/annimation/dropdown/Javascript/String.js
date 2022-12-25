let name1 = 'akshay'
console.log('lenght' ,name1.length);
var name2 = name1.slice(1,4)
console.log(name2);

var carName = 'mini cuper'
console.log( carName.substring(4,-2));

var address = ' Wardha i live wardha in wardha'
var updateAddress = address.replace(/wardha/i,'nagpur')
console.log(updateAddress);

var text = 'akshay barai..A.'
console.log(text.toUpperCase());
var text1 = 'AKSHAY BARAI....'
console.log(text1.toLowerCase());

console.log(text.concat(text1));
var text2 = text + " " + text1 ;
console.log(text2);

console.log(text[4]);
console.log(text.charAt(4));

console.log(text.indexOf('barai'));
console.log(text.lastIndexOf('a'));
console.log(text.search(/a/));

var date = '10-11-2022';
var newDate = date.split("-");
console.log(newDate);

let FullName = 'akshay barai';
let NewFullName = FullName.split(' ');
console.log( NewFullName);

var Name =  NewFullName[0];
console.log(Name);
 var SurName =  NewFullName[1];
 console.log(SurName);