var a = 3417865
var b = 0;

while(a >= 1){
    b = b*10 + a%10;
    a /= 10;
    a = parseInt(a);
}

console.log(b);
