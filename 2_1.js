var counter=0;
var sum=0;

for(var i=1; i<99; i++){
    if(i%2==0){
        sum+=i;
        counter++;
    }
}
console.log("Сумма четных чисел в интервале (1, 99) равна: ", sum)
console.log("Количество четных чисел в интервале (1, 99): ", counter)
