var array = new Array(19, 10, 12, 14, 15, 8, 0, 430, -11, 983, 5, 45, 87, 2, 895);
var a = 0;
var counter = 0;

for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j < array.length; j++){
        if(array[j] < array[i]){
            a = array[i];
            array[i] = array[j];
            array[j] = a;
            counter++;
        }
    }
    if(counter == 0)    break;
    counter = 0;
}

console.log(array);