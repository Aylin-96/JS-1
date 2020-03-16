var array = new Array(19, 10, 12, 14, 15, 8, 0, 430, -11, 983, 5, 45, 87, 2, 895);
var a = 0;

for(var j = 1; j < array.length; j++){
    if(array[j] < array[j - 1]){
        for(var i = 0; i < j; i++){
            if(array[j] < array[i]){
                a = array[j];
                for(var c = j; c > i; c--){
                    array[c] = array[c - 1];
                }
                array[i] = a;
                break;
            }
        }
    }
}

console.log(array)