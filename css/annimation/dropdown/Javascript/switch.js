function switchstatement(data){
    // let a = 80;
    // let b = 20;
    // let Result;
    let a =  prompt('enter value of a');
    let b = prompt('enter value of b');
    let operator = prompt('operator')
    let Result ;
    switch (operator){
    case '+':
      Result = a + b
      console.log('Result',Result);
      break
      case '-':
      Result = a - b
      console.log('Result',Result);
      break
      case '*':
      Result = a * b
      console.log('Result',Result);
      break
      case '/':
      Result = a / b
      console.log('Result',Result);
      break
      default :
      console.log('no found match in switch');
}
}
