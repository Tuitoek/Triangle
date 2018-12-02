 var triangleTracker = function(){

var first = document.getElementById("a");
var second = document.getElementById("b");
var third = document.getElementById("c");

if(first === second || second === third || third === first)
{
  alert("Equilateral triangle");
}
else if(first === second && second == !third || first === third && third == !second )
{
  alert("Isosceles triangle");
}
else if (first !== second || second !==third || third !== first){
  alert("Scalene triangle")
}


};
