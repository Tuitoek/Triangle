 var triangleTracker = function(){

var first = document.getElementById("a").value;
var second = document.getElementById("b").value;
var third = document.getElementById("c").value;

if (first+second > third || second+third > first || third+first> second){

if(first === second && second === third && third === first)
{
  alert("Equilateral triangle");
}
else if(first === second || second === third || third === first)
{
  alert("Isosceles triangle");
}
else if (first !== second || second !==third || third !== first){
  alert("Scalene triangle");
}
else
{
  alert("NOT A TRIANGLE!");
}
}

};
