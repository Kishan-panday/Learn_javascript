let num = prompt("Enter the number:");
let grade;
if( num>=90 && num<=100){
   grade="A";
}
else if(num>=70 && num <= 89){
    grade="B";
}
else if(num>=60 && num <= 69){
    grade="C";
}
else if(num>=50 && num <= 59){
    grade="D";
}
else{
    grade="f";
}
console.log(grade);