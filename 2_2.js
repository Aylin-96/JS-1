var a = 113;

for(var i=2; i<a; i++){
    if(a%i == 0){
        console.log("Число не является простым");
        break;
    }
}

if(i == a)  console.log("Число простое");