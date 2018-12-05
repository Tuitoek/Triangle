 var triangleTracker = function(){

var first = parseInt(document.getElementById("a").value);
var second = parseInt(document.getElementById("b").value);
var third = parseInt(document.getElementById("c").value);
var triangle = [first,second,third];



if(first === second && second === third && third === first)
{
  alert("Equilateral triangle");
}
else if(first === second || second === third || third === first)
{
  alert("Isosceles triangle");
}
else if ((first + second <= third) || (second + third <= first) || (third + first <= second))
{
  alert("NOT A TRIANGLE!");
}
else if ((first + second >third) || (second + third > first) || (third + first > second)){
  alert("Scalene triangle");
}


};
