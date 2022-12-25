var car = {
    carName : 'Audi',
    price : 50000 ,
    color : 'white'
}
for(let abc in car){
    console.log(`${abc}`, `--> ${car[abc]}`);
    console.log(abc,'--> ' ,car[abc]);
    // if (abc == 'color')
    // console.log(car[abc]);

}

    let cars = ['Audi','Volvo','Ennivo','mini cuper']
    for(let a of cars){
       
        if (a =='Ennivo'){
            continue;
        }
        console.log(a);
    }

    let b = 20;
    while (b > 10){
        console.log(b);
        b--;

    }
 var g = 5;
 do{
    console.log(g);
    g++;
  }
  while (g < 7);