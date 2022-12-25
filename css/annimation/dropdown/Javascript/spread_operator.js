let color = ['pink','red','yellow','blue']
let [clr1,clr2,...clr] = color ;
console.log(clr1,...clr);

let color1 = ['pink','white','black']
let newColor = [...color,...color1]
console.log(newColor);

let car = {
    CarName : 'Audi',
    price : 700000,
    color :'red'
}

let  updateCar = { 
    CarName : 'Audi1',
    price : 800000,
    size : 'big'
}

 let newCar = {...updateCar,...car}
console.log(newCar);