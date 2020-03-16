var a = 89735;
var sum = 0;

while(a != 0){
     sum += a%10;
     a /=10;
     a = parseInt(a);
}

console.log(sum);