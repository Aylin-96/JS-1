var rating = 89;
var mark = "";

if(rating>=90 && rating<=100)   mark = "A"
if(rating>=75 && rating<=89)    mark = "B"
if(rating>=60 && rating<=74)    mark = "C"
if(rating>=40 && rating<=59)    mark = "D"
if(rating>=20 && rating<=39)    mark = "E"
if(rating>=0 && rating<=19)     mark = "F"

console.log("Mark: ", mark)