var n = 12;
var factorial = 1;

if(n <= 1)  console.log(factorial)
else{
    for(var i = n; i > 1; i--){
        factorial *= i;
    }
    console.log(factorial);
}