function conditn(){
    let maxmark = 70;
    let minmark = 35;
    if(maxmark > minmark){        // if(maxmark < minmark){      
    console.log('i am pass');     //  console.log('i am pass');  
     }                           // }
   else{                         // else{
     console.log('i am fail');    //  console.log('i am fail');
    }                            //  }
}

function marks(){
    let basicpercentage = 40;
    let percentage1 =50 ;
    let percentage2 =60 ;
    let percentage3 =80 ;
    if (50 <40){
        console.log('third class');
    }
    else if (60 < 50 && 60 > 40){
        console.log('second class');
    }
    else if (80 > 60 && 80 > 50){
        console.log('first class');
    }

    else {
        console.log('fail');
    }
}

function logicalOr(){
    if(10 >=20 || 10 < 50)
    console.log('inside if');
}
50>10  ? console.log('50 is greater'):console.log('10 is greater')
   
let i=1
console.log('i',i);
console.log('i++',i++);
console.log('i',i);


let h=1
console.log('h',h);
console.log('++h',++h);
console.log('h',h);

let no1 = 20;
let no2 = 30;
let result = ++no2;
console.log('result',result);
console.log('no1', no2);
