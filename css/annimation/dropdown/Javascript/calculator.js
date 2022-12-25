function calcu(){
    let a = parseInt (prompt('Enter First Value'));  
    let operation =  (prompt('operation do you want to perform (+ or - or * or /)')); 
    let b = parseInt (prompt('Enter Second Value'));
    console.log(a); 
    console.log(operation);
    console.log(b);
     
    switch (operation) {
         case '+':
            alert (a+b);
            console.log('Addition of'+ a +'and' + b +'is'+ (a+b));
            break ;
            case '-':
            alert (a-b);
            console.log('Substraction of'+ a +'and' + b +'is'+ (a-b));
            break ;
            case '*':
            alert (a*b);
            console.log('Mutliplication of'+ a +'and' + b +'is'+ (a*b));
            break ;
            case '/':
            alert (a/b);
            console.log('Division of'+ a +'and' + b +'is'+ (a/b));
            break ;
            default:
            console.log('Envalid Input');
    }
}