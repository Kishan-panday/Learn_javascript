
function vow(string) {
let count = 0;
for(let i =0; i < string.length ;i++){
let char = string[i].toLowerCase();
if (char==="a" ||  char==="e" || char==="i" || char==="o" || char==="u") {
    count++;
}
}
console.log(count);
}

  