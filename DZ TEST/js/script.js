let chevy = {
    make : "chevy",
    model : "aveo",
    year : 1950,
    color : "red",
    passengers : 4,
    mill : 1821,
    light : function(){
        console.log("Включен свет");
    },
    started : false,
    start : function(){
        this.started = true;
    },
    stop : function(){
        this.started = false;
    },
    drive : function(){
        if (this.started){
            console.log("EDEM");
        } else{
            console.log("Нужно завести двигатель");
        }
}
};


console.log(chevy);


// function check(car){
//     if(car.mill > 10000){
//         return false;
//     }else if (car.year > 1960){
//         return false;
//     }
//     car.bay =  true;
// }

// let car = check(chevy);
// chevy.light();
