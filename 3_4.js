var max = Number.NEGATIVE_INFINITY;
var array = new Array(19, 10, 12, 14, 15, 8, 0, 430, -11, 983, 5, 45, 87, 2, 895);
var index = 0;

for(var i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
        index = i;
    }
}

console.log("Индекс максимального элемента массива: ", index);