var array = new Array(19, 10, 12, 14, 15, 8, 0, 430, -11, 983, 5, 45, 87, 2, 895);
var l = array.length;
var counter = 0;
var a = 0;

for(;;){
    for(var i = 0; i < l - 1; i++){
        if(array[i] > array[i+1]){
            a = array[i];
            array[i] = array[i+1];
            array[i+1] = a;
            counter++;
        }
    }
    l--;
    if(counter == 0)    break;
    counter = 0;
}

console.log(array);