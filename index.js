 var triangleTracker = function(){

var first = document.getElementById("a");
var second = document.getElementById("b");
var third = document.getElementById("c");

if(first === second && second === third)
{
  alert("equilateral triangle");
}
else (first === second && second == !third || first === third && third == !second )
{
  alert("isosceles triangle");
}


};
