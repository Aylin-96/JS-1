var array = new Array(19, 10, 12, 14, 15, 8, 0, 430, -11, 983, 5, 45, 87, 2, 895);
var l = (array.length + 1)/2;
var mid = 0;
var a = 0;

if(array.length%2 != 0) mid = l-1
else mid = l;

for(var i = 0; i < mid; i++){
    a = array[i];
    array[i] = array[l+i];
    array[l+i] = a;
}

console.log(array);