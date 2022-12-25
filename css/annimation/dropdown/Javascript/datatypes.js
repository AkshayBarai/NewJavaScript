let first = 'Akshay'
let first1 = "Akshay"
let first2 = ''
let first3 = ""
console.log(typeof(first3));
let rs = 20;
let rs1 = 20;
console.log(rs==rs1);
let t = true;
console.log(typeof(t));
let t1 = null;
console.log(t1);
console.log(typeof(t1));
let t2;
console.log(t2);
let t3 =50.2;
console.log(t3);
console.log(typeof(t3));
let t4 = {}
console.log(t4);
console.log(typeof(t4));
let t5 = []
console.log(typeof(t5));

function abc(){
    console.log('aaaaaaaaaa');
    let t6 = 9999999999999999;
    let t7 = 9999999999999999n;
    let t8 = BigInt(9999999999999999n)
    let t9 = BigInt('4562136598745632156321')
    console.log(t6+ ' ' +t7);
    console.log(t8+ ' ' +t9);
    console.log(typeof(t7)+typeof(t9));
    let t10 = Symbol('hi')
    console.log(t10);
    console.log(t10.description);
    console.log(typeof(t10));
}

