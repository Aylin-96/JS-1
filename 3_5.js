var array = new Array(19, 10, 12, 14, 15, 8, 0, 430, -11, 983, 5, 45, 87, 2, 895);
var sum = 0;

for(var i = 1; i < array.length; i += 2){
    sum += array[i]
}

console.log("Сумма элементов массива с нечетными индексами: ", sum);