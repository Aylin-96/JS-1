var a = 998001;
var root = a;

for(var i = 0; i < 100; i++){
    root = (root + a/root)/2;
}

root = parseInt(root);

console.log(root)